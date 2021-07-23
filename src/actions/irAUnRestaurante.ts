
import { phaseNames } from '../data';
import { EntityFactory } from '../types';

export default async function* irAUnRestaurante(factory: EntityFactory): AsyncIterable<string>
{
	const comuna = await factory.requestComuna();
	yield `${comuna.name} está en ${phaseNames.get(comuna.phase)}`;
	if (comuna.phase === 1)
	{
		// In quarantine
		yield 'Los restaurantes no pueden funcionar en cuarentena';
		factory.markFailure();
		return;
	}

	if (comuna.phase === 4)
	{
		yield `Debido a que ${comuna.name} está en apertura, está permitida la atención en espacios abiertos y cerrados`;
		return;
	}

	if (comuna.phase === 2)
		yield `Debido a que ${comuna.name} está en transición, los restaurantes sólo pueden atender de lunes a viernes`;

	const vaccinated = await factory.requestVaccinated();
	yield vaccinated ?
		'Debido a que estás vacunado, es posible la atención en espacios abiertos y cerrados' :
		'Debido a que no estás vacunado, la atención sólo es posible en espacios abiertos';
	const pass = vaccinated && await factory.requestMobilityPass();
	if (pass)
		yield 'Lleva tu pase de movilidad';
	else if (vaccinated)
		yield 'Obtén tu pase de movilidad <a target="_blank" href="https://mevacuno.gob.cl/">aquí</a>';
	else
		yield '¡Vacúnate!';
}
