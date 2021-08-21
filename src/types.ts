
// Entities

export interface Entity
{
	name: string;
}

export interface Comuna extends Entity
{
	phase: number;
	region: number;
	next?: {
		phase: number;
		date: string;
	}
}

export interface Region
{
	id: number;
	name: string;
	longName: string;
	curfew: {
		start: string;
		end: string;
	},
	next?: {
		date: string;
		curfew: {
			start: string;
			end: string;
		}
	}
}

export interface BooleanEntity extends Entity
{
	value: boolean;
}

export interface EntityGroup<T extends Entity>
{
	name: string;
	entities: T[]
}

export interface VaccineDose
{
	date: Date,
	kind: string
}

export interface VaccinationStatus
{
	dateOfBirth: Date,
	first?: VaccineDose;
	second?: VaccineDose;
	third?: VaccineDose;
}

export interface DateSelectorConfig
{
	from?: Date;
	to?: Date;
	default?: Date;
}

export interface VaccinationDate
{
	// Local date in ISO format
	date: string;
	name: string;
	dose: 1 | 2 | 3;
	minAge?: number;
	maxAge?: number;
	kind?: string;
	daysAfterPreviousDose?: number;
	previousDoseMinDate?: string;
	previousDoseMaxDate?: string;
	// Extra checks
	check?: (status: VaccinationStatus) => boolean;
}

export interface LocalVotacion
{
	comuna: string;
	circunscripcion: string;
	direccion: string;
}

// Request entities and factory

export type RequestEntity<T> = (customName?: string, exclude?: string[]) => Promise<T>;
export type Request<T> = (question: string) => Promise<T>;

export interface EntityFactory
{
	getBeforeDate(action: string, ...dates: (string | undefined)[]): Promise<boolean>;
	requestComuna: RequestEntity<Comuna>,
	requestVaccinated: RequestEntity<boolean>,
	requestMobilityPass: RequestEntity<boolean>,
	requestAllVaccinated: RequestEntity<boolean>,
	requestInteraction: RequestEntity<boolean>,
	requestOpenSpace: RequestEntity<boolean>,
	requestBoolean: RequestEntity<boolean>,
	requestVaccinationDose: (question: string, kinds: string[], config?: DateSelectorConfig) => Promise<VaccineDose>,
	requestDate: (question: string, config?: DateSelectorConfig) => Promise<Date>,
	requestSubscribe: <T extends unknown>(config: T) => Promise<boolean>,
	requestLocalVotacion: () => Promise<LocalVotacion>,
	markFailure: () => void,
}

export type Action = (entityFactory: EntityFactory) => AsyncIterable<string>;
