
import { phaseNames } from '../data';
import { EntityFactory } from '../types';

export default async function* irAUnRestaurante(factory: EntityFactory): AsyncIterable<string>
{
	const comuna = await factory.requestComuna();
	if (comuna.phase === 1)
	{
		// In quarantine
		yield 'Los restaurantes no pueden funcionar en cuarentena';
		factory.markFailure();
		return;
	}
	yield `${comuna.name} está en ${phaseNames.get(comuna.phase)}`;

	if (comuna.phase === 4)
	{
		yield 'Atención en espacios abiertos y cerrados';
		return;
	}

	if (comuna.phase === 2)
		yield 'Sólo de lunes a viernes';

	const vaccinated = await factory.requestVaccinated();
	yield vaccinated ?
		'Atención en espacios abiertos y cerrados' :
		'Atención solo en espacios abiertos';
	const pass = vaccinated && await factory.requestMobilityPass();
	if (pass)
		yield 'Lleva tu pase de movilidad';
	else if (vaccinated)
		yield 'Obtén tu pase de movilidad <a target="_blank" href="https://mevacuno.gob.cl/">aquí</a>';
	else
		yield '¡Vacúnate!';
}
