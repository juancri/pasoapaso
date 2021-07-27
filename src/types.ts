
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

// Request entities and factory

export type RequestEntity<T> = (customName?: string, exclude?: string[]) => Promise<T>;

export interface EntityFactory
{
	getBeforeDate(...dates: (string | undefined)[]): Promise<boolean>;
	requestComuna: RequestEntity<Comuna>,
	requestVaccinated: RequestEntity<boolean>,
	requestMobilityPass: RequestEntity<boolean>,
	requestAllVaccinated: RequestEntity<boolean>,
	requestInteraction: RequestEntity<boolean>,
	requestOpenSpace: RequestEntity<boolean>,
	requestBoolean: RequestEntity<boolean>,
	markFailure: () => void,
}

export type Action = (entityFactory: EntityFactory) => AsyncIterable<string>;
