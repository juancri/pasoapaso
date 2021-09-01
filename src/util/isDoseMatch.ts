
import { DateTime } from "luxon";
import { VaccinationDate, Person } from "../types";

export default function isDoseMatch(person: Person, date: VaccinationDate): boolean
{
	// Check dose
	if (date.dose === 1 && person.first)
		return false;
	if (date.dose === 2 && !person.first)
		return false;
	if (date.dose === 2 && person.second)
		return false;
	if (date.dose === 3 && !person.second)
		return false;
	if (date.dose === 3 && person.third)
		return false;

	// Check age range
	const dateOfBirth = DateTime.fromJSDate(person.dateOfBirth);
	const dateOfDose = DateTime.fromISO(date.date);
	const personAge = dateOfDose.diff(dateOfBirth).as('years');
	if (date.minAge && personAge < date.minAge)
		return false;
	if (date.maxAge && personAge > date.maxAge)
		return false;

	// Check vaccine kind
	if (date.kind)
	{
		if (!person.first)
			return false;
		if (person.first.kind !== date.kind)
			return false;
	}

	// Check days from the previous dose
	if (date.daysAfterPreviousDose)
	{
		const previousDose = person.second ?? person.first;
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
		const previousDose = person.second ?? person.first;
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
		return date.check(person);

	// Done!
	return true;
}
