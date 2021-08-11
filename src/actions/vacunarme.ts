
import { DateTime } from 'luxon';
import { vaccinationSchedule, vaccineKinds } from '../data';
import { DateSelectorConfig, EntityFactory, VaccinationDate, VaccinationStatus } from '../types';

const BIRTHDAY_DATE_CONFIG: DateSelectorConfig = {
	from: DateTime.local().plus({ years: -150 }).toJSDate(),
	to: new Date(),
	default: DateTime.local().plus({ years: -20 }).toJSDate()
};
const FIRST_DOSE_DATE_CONFIG: DateSelectorConfig = {
	from: DateTime.fromISO('2020-12-24').toJSDate(),
	to: new Date()
};
const DATE_LOCALE = 'es';
const NICE_DATE_FORMAT = `cccc d 'de' LLLL`;
const MIN_DAYS_BETWEEN_DOSES = 14;
const DEFAULT_DAYS_BETWEEN_DOSES = 28;
const TODAY = DateTime.local();

async function getVaccinationStatus(factory: EntityFactory): Promise<VaccinationStatus>
{
	const dateOfBirth = await factory.requestDate('¿Cuál es tu fecha de nacimiento?', BIRTHDAY_DATE_CONFIG);
	const hasFirst = await factory.requestBoolean('¿Ya te vacunaste con alguna dosis?');
	if (!hasFirst)
		return { dateOfBirth };

	const first = await factory.requestVaccinationDose('primera dosis', vaccineKinds, FIRST_DOSE_DATE_CONFIG);
	if (first.kind === 'Cansino')
		return { dateOfBirth, first };

	if (TODAY.diff(DateTime.fromJSDate(first.date)).as('days') < MIN_DAYS_BETWEEN_DOSES)
		return { dateOfBirth, first };

	const hasSecond = await factory.requestBoolean('¿Ya recibiste la segunda dosis?');
	if (!hasSecond)
		return { dateOfBirth, first };
	const secondDoseDateConfig: DateSelectorConfig = {
		...FIRST_DOSE_DATE_CONFIG,
		from: DateTime
			.fromJSDate(first.date)
			.plus({ days: MIN_DAYS_BETWEEN_DOSES })
			.toJSDate(),
		default: DateTime
			.fromJSDate(first.date)
			.plus({ days: DEFAULT_DAYS_BETWEEN_DOSES })
			.toJSDate()
	};
	const second = await factory.requestVaccinationDose('segunda dosis', [first.kind], secondDoseDateConfig);
	return { dateOfBirth, first, second };
}

function isMatch(status: VaccinationStatus, date: VaccinationDate): boolean
{
	// Check dose
	if (date.dose === 1 && status.first)
		return false;
	if (date.dose === 2 && status.second)
		return false;
	if (date.dose === 3 && status.third)
		return false;

	// Check age range
	const dateOfBirth = DateTime.fromJSDate(status.dateOfBirth);
	const dateOfDose = DateTime.fromISO(date.date);
	const personAge = dateOfDose.diff(dateOfBirth).as('years');
	if (date.minAge && personAge < date.minAge)
		return false;
	if (date.maxAge && personAge > date.maxAge)
		return false;

	// Check vaccine kind
	if (date.kind)
	{
		if (!status.first)
			return false;
		if (status.first.kind !== date.kind)
			return false;
	}

	// Check days from the previous dose
	if (date.daysAfterPreviousDose)
	{
		const previousDose = status.second ?? status.first;
		if (!previousDose)
			// This should not happen
			return false;
		const previousDoseDate = DateTime.fromJSDate(previousDose.date);
		const daysAfterPreviousDose = dateOfDose.diff(previousDoseDate).as('days');
		if (daysAfterPreviousDose < date.daysAfterPreviousDose)
			return false;
	}

	// Check previous dose date range
	if (date.previousDoseMinDate || date.previousDoseMaxDate)
	{
		const previousDose = status.second ?? status.first;
		if (!previousDose)
			// This should not happen
			return false;
		const previousDoseDate = DateTime.fromJSDate(previousDose.date);
		if (date.previousDoseMinDate)
		{
			const minDate = DateTime.fromISO(date.previousDoseMinDate);
			if (+previousDoseDate < +minDate)
				return false;
		}
		if (date.previousDoseMaxDate)
		{
			const maxDate = DateTime.fromISO(date.previousDoseMaxDate);
			if (+previousDoseDate > +maxDate)
				return false;
		}
	}

	// Extra checks?
	if (date.check)
		return date.check(status);

	// Done!
	return true;
}

function isoToNice(date: string): string
{
	return DateTime
		.fromISO(date)
		.setLocale(DATE_LOCALE)
		.toFormat(NICE_DATE_FORMAT);
}

export default async function* vacunarme(factory: EntityFactory): AsyncIterable<string>
{
	const status = await getVaccinationStatus(factory);
	const matches = vaccinationSchedule.filter(date => isMatch(status, date));
	for (const date of matches)
		yield `Puedes vacunarte el ${isoToNice(date.date)}: ${date.name}`;
	if (!matches.length)
		yield 'No hay ninguna fecha programada que coincida con tus datos';
}
