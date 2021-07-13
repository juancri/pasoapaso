
// Entities

export interface Entity
{
	name: string;
}

export interface Phase extends Entity
{
	number: number;
}

export interface Comuna extends Entity
{
	phase: Phase;
}

export interface Region extends Entity
{
	comunas: Comuna[];
}

export interface BooleanEntity extends Entity
{
	value: boolean;
}

export interface EntityGroup<T>
{
	name: string;
	entities: T[]
}

// Request entities and factory

export type RequestEntity<T> = (customName?: string) => Promise<T>;

export interface EntityFactory
{
	requestComuna: RequestEntity<Comuna>,
	requestVaccinated: RequestEntity<boolean>,
	requestMobilityPass: RequestEntity<boolean>,
	requestAllVaccinated: RequestEntity<boolean>,
	requestInteraction: RequestEntity<boolean>,
}

export type Action = (entityFactory: EntityFactory) => AsyncIterable<string>;
