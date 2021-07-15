
import { EntityFactory } from "../types";

export default async function* realizarUnaReunion(factory: EntityFactory): AsyncIterable<string>
{
	const comuna = await factory.requestComuna();
	if (comuna.phase === 1)
	{
		// In quarantine
		yield "Reuniones prohibidas en cuarentena";
		return;
	}

	yield 'Un metro de distancia entre personas';
	const vaccinated = await factory.requestAllVaccinated();
	const capacity = Math.pow(2, comuna.phase - 2) * (vaccinated ? 10 : 5);
	yield `Aforo máximo de ${capacity} personas`;
}
