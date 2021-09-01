
import { DateTime } from 'luxon';
import { vaccinationSchedule, vaccineKinds } from '../data';
import { DateSelectorConfig, EntityFactory, Person, VaccineDose } from '../types';
import isDoseMatch from '../util/isDoseMatch';

const BIRTHDAY_DATE_FROM = DateTime.fromISO('1900-01-01');
const BIRTHDAY_DATE_CONFIG: DateSelectorConfig = {
	from: BIRTHDAY_DATE_FROM.toJSDate(),
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

interface VaccineDoseSubscription
{
	date: string;
	kind: string;
}

interface VaccineSubscriptionBase
{
	dateOfBirth: string;
	first?: VaccineDoseSubscription;
	second?: VaccineDoseSubscription;
	third?: VaccineDoseSubscription;
}

function jsDateToISO(date: Date): string
{
	return DateTime.fromJSDate(date).toISODate();
}

function vaccineDoseToVaccineDoseSubscription(dose?: VaccineDose): VaccineDoseSubscription | undefined
{
	if (!dose)
		return undefined;
	return {
		date: jsDateToISO(dose.date),
		kind: dose.kind
	};
}

function personToVaccineSubscriptionBase(person: Person): VaccineSubscriptionBase
{
	return {
		dateOfBirth: jsDateToISO(person.dateOfBirth),
		first: vaccineDoseToVaccineDoseSubscription(person.first),
		second: vaccineDoseToVaccineDoseSubscription(person.second),
		third: vaccineDoseToVaccineDoseSubscription(person.third)
	};
}

function getNextDoseConfig(previous: VaccineDose): DateSelectorConfig
{
	return {
		...FIRST_DOSE_DATE_CONFIG,
		from: DateTime
			.fromJSDate(previous.date)
			.plus({ days: MIN_DAYS_BETWEEN_DOSES })
			.toJSDate(),
		default: DateTime
			.fromJSDate(previous.date)
			.plus({ days: DEFAULT_DAYS_BETWEEN_DOSES })
			.toJSDate()
	};
}

async function getVaccinationStatus(factory: EntityFactory): Promise<Person>
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
	const secondDoseDateConfig = getNextDoseConfig(first);
	const second = await factory.requestVaccinationDose('segunda dosis', [first.kind], secondDoseDateConfig);
	if (TODAY.diff(DateTime.fromJSDate(second.date)).as('days') < MIN_DAYS_BETWEEN_DOSES)
		return { dateOfBirth, first, second };

	const hasThird = await factory.requestBoolean('¿Ya recibiste una dosis de refuerzo?');
	if (!hasThird)
		return { dateOfBirth, first, second };
	const thirdDoseDateConfig = getNextDoseConfig(second);
	// TODO: Check reinforcement vaccine kinds
	const third = await factory.requestVaccinationDose('dosis de refuerzo', vaccineKinds, thirdDoseDateConfig);
	return { dateOfBirth, first, second, third };
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
	// Get status
	const status = await getVaccinationStatus(factory);

	// Get matches
	const matches = vaccinationSchedule.filter(date => isDoseMatch(status, date));

	// There are matches
	for (const date of matches)
		yield `Puedes vacunarte el ${isoToNice(date.date)}: ${date.name}`;

	// No matches
	if (!matches.length)
		yield 'Por el momento, no hay ninguna fecha programada que coincida con tus datos';

	// Subscription
	const subscribe = await factory.requestBoolean('¿Quieres que te avisemos cuando puedas recibir una dosis?');
	if (subscribe)
	{
		const subscriptionResult = await factory.requestSubscribe<VaccineSubscriptionBase>(personToVaccineSubscriptionBase(status));
		if (subscriptionResult)
			yield 'Te avisaremos cuando puedas recibir una nueva dosis';
	}
}
