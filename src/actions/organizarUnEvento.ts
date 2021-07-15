
import { EntityFactory } from '../types';

type Capacity = [phase: number, interaction: boolean, pass: boolean, closedCapacity: number, openCapacity: number];

const CAPACITIES: Capacity[] = [
	[2, false, false, 25, 100],
	[2, false, true, 50, 100],
	[2, true, true, 25, 100],
	[3, false, false, 100, 200],
	[3, false, true, 500, 1_000],
	[3, true, false, 25, 100],
	[3, true, true, 100, 200],
	[4, false, false, 250, 500],
	[4, false, true, 1_000, 5_000],
	[4, true, false, 100, 250],
	[4, true, true, 250, 1_000]
];

export default async function* organizarUnEvento(factory: EntityFactory): AsyncIterable<string>
{
	const comuna = await factory.requestComuna();
	if (comuna.phase === 1)
	{
		// In quarantine
		yield 'Eventos prohibidas en cuarentena';
		return;
	}
	const interaction = await factory.requestInteraction();
	const pass = await await factory.requestAllVaccinated();
	if (comuna.phase === 2 && interaction && !pass)
	{
		yield 'Eventos con interacción con el público sin pase de movilidad prohibidos en transición';
		return;
	}

	const capacity = CAPACITIES.find(c =>
		c[0] === comuna.phase &&
		c[1] === interaction &&
		c[2] === pass);
	if (!capacity)
		throw new Error(`Capacity not found for case ${comuna.phase} ${interaction} ${pass}`);

	yield `En espacios abiertos con aforo máximo de ${capacity[3]} personas`;
	yield `En espacios cerrados con aforo máximo de ${capacity[4]} personas`;
}
