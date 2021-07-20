
import { phaseNames } from '../data';
import { EntityFactory } from '../types';

type Capacity = [phase: number, interaction: boolean, pass: boolean, openSpace: boolean, capacity: number];

const CAPACITIES: Capacity[] = [
	[2, false, false, false, 25],
	[2, false, false, true, 100],
	[2, false, true, false, 50],
	[2, false, true, true, 100],
	[2, true, true, false, 25],
	[2, true, true, true, 100],
	[3, false, false, false, 100],
	[3, false, false, true, 200],
	[3, false, true, false, 500],
	[3, false, true, true, 1_000],
	[3, true, false, false, 25],
	[3, true, false, true, 100],
	[3, true, true, false, 100],
	[3, true, true, true, 200],
	[4, false, false, false, 250],
	[4, false, false, true, 500],
	[4, false, true, false, 1_000],
	[4, false, true, true, 5_000],
	[4, true, false, false, 100],
	[4, true, false, true, 250],
	[4, true, true, false, 250],
	[4, true, true, true, 1_000]
];

export default async function* organizarUnEvento(factory: EntityFactory): AsyncIterable<string>
{
	const comuna = await factory.requestComuna();
	if (comuna.phase === 1)
	{
		// In quarantine
		yield 'No puedes realizar un evento en una comuna en cuarentena';
		factory.markFailure();
		return;
	}
	const interaction = await factory.requestInteraction();
	const pass = await await factory.requestAllVaccinated();
	if (comuna.phase === 2 && interaction && !pass)
	{
		yield 'No es posible realizar eventos con interacción con el público sin pase de movilidad en una comuna en transición';
		factory.markFailure();
		return;
	}

	yield `${comuna.name} está en ${phaseNames.get(comuna.phase)}`;
	if (pass)
		yield "Todos los asistentes deben portar su pase de movilidad";

	const open = await factory.requestOpenSpace();
	const capacity = CAPACITIES.find(c =>
		c[0] === comuna.phase &&
		c[1] === interaction &&
		c[2] === pass &&
		c[3] === open);
	if (!capacity)
		throw new Error(`Capacity not found for case ${comuna.phase} ${interaction} ${pass} ${open}`);

	yield `El aforo máximo es de ${capacity[4]} personas`;
}
