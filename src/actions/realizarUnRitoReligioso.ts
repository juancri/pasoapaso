
import formatNumber from "@/util/formatNumber";
import { phaseNames } from "../data";
import { EntityFactory } from "../types";

type MaxCapacity = [phase: number, open: boolean, pass: boolean, capacity: number];

const MAX_CAPACITIES: MaxCapacity[] = [
	[1, false, true, 10],
	[1, true, true, 20],
	[2, false, false, 25],
	[2, false, true, 50],
	[2, true, false, 50],
	[2, true, true, 100],
	[3, false, false, 100],
	[3, false, true, 500],
	[3, true, false, 200],
	[3, true, true, 1_000],
	[4, false, false, 250],
	[4, false, true, 1_000],
	[4, true, false, 500],
	[4, true, true, 5_000],
];
const MAX_CAPACITIES_PER_SPACE = new Map<number, number>([
	[1, 8],
	[2, 8],
	[3, 4],
	[4, 2]
]);

const getMaxCapacity = (phase: number, open: boolean, pass: boolean): number =>
{
	const maxCapacityResult = MAX_CAPACITIES.find(c =>
		c[0] === phase &&
		c[1] === open &&
		c[2] === pass);
	if (!maxCapacityResult)
		throw new Error(`Capacity not found for data: ${phase} ${open} ${pass}`);
	return maxCapacityResult[3];
}

export default async function* realizarUnRitoReligioso(factory: EntityFactory): AsyncIterable<string>
{
	const comuna = await factory.requestComuna();
	yield `${comuna.name} está en ${phaseNames.get(comuna.phase)}`;
	if (comuna.phase === 1)
	{
		yield `Debido a que ${comuna.name} está en cuarentena, sólo se permiten excepciones como ceremonias de funerales, y cultos religiosos organizados por una entidad reconocida por el Estado`;
		yield `Debido a que ${comuna.name} está en cuarentena, sólo se pueden realizar en lugares establecidos para este fin. No en residencias particulares.`;
		yield `Debido a que ${comuna.name} está en cuarentena, todos quienes participan deben tener permiso de desplazamiento o pase de movilidad`;
		yield 'Pueden obtener su permiso de desplazamiento en <a target="_blank" href="https://www.comisariavirtual.cl">comisariavirtual.cl</a>';
		yield 'Pueden obtener su pase de movilidad <a target="_blank" href="https://mevacuno.gob.cl/">aquí</a>';
	}
	else
	{
		yield `Debido a que ${comuna.name} no está en cuarentena, se puede realizar de lunes a domingo, incluyendo festivos`;
	}

	const open = await factory.requestOpenSpace();
	if (!open)
	{
		yield 'Debido a que es un espacio cerrado, se deben mantener las normas de ventilación';
		yield 'Ventilación natural: mantener una ventana o puerta abierta que permita la entrada de aire, de un tamaño mínimo del 4% de toda la superficie útil';
		yield 'Ventilación artificial: utilizar sistemas de ventilación artificial que cumplan con la norma (ASHRAE 62.1-2019) considerando 6 renovaciones de aire por hora';
	}

	// Small space
	const maxCapacityPerSpace = MAX_CAPACITIES_PER_SPACE.get(comuna.phase);
	if (!maxCapacityPerSpace)
		throw new Error(`Capacity per space not found for phase ${comuna.phase}`);
	const forcePass = comuna.phase === 1;
	const maxCapacity = getMaxCapacity(comuna.phase, open, forcePass);
	const spaceSize = maxCapacity * maxCapacityPerSpace;
	const isSmall = await factory.requestBoolean(`¿El lugar tiene menos de ${spaceSize}m² útiles?`);
	if (isSmall)
	{
		yield `El aforo máximo es de 1 persona cada ${maxCapacityPerSpace}m² útiles`;
		return;
	}
	// Force pass or not vaccinated
	else if (forcePass || !(await factory.requestAllVaccinated()))
	{
		yield `El aforo máximo es de ${formatNumber(maxCapacity)} personas`;
		return;
	}

	// Have pass
	// Medium or large place?
	const maxCapacity2 = getMaxCapacity(comuna.phase, open, true);
	const spaceSize2 = maxCapacity2 * maxCapacityPerSpace;
	const isBig = await factory.requestBoolean(`¿El lugar tiene más de ${spaceSize2}m² útiles?`);
	yield isBig ?
		`El aforo máximo es de ${formatNumber(maxCapacity2)} personas` :
		`El aforo máximo es de 1 persona cada ${maxCapacityPerSpace}m² útiles`;
}
