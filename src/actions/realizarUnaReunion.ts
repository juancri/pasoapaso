
import { phaseNames } from '../data';
import { EntityFactory } from '../types';

export default async function* realizarUnaReunion(factory: EntityFactory): AsyncIterable<string>
{
	const comuna = await factory.requestComuna();
	if (comuna.phase === 1)
	{
		// In quarantine
		yield 'No puedes realizar reuniones en una comuna en cuarentena';
		factory.markFailure();
		return;
	}
	else if (comuna.phase === 2)
	{
		yield 'Debido a que tu comuna está en transición, puedes realizar reuniones solo de lunes a viernes';
	}
	else
	{
		yield `${comuna.name} está el ${phaseNames.get(comuna.phase)}`;
	}

	yield 'Los asistentes deben mantener un metro de distancia entre ellos';
	const vaccinated = await factory.requestAllVaccinated();
	const capacity = Math.pow(2, comuna.phase - 2) * (vaccinated ? 10 : 5);
	yield `El aforo máximo es de ${capacity} personas`;
}
