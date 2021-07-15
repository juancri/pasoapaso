
import { EntityFactory } from '../types';

export default async function* irAUnRestaurante(factory: EntityFactory): AsyncIterable<string>
{
	const comuna = await factory.requestComuna();
	if (comuna.phase === 1)
	{
		// In quarantine
		yield 'Los restaurantes no pueden funcionar en cuarentena';
		return;
	}
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
	const pass = await factory.requestMobilityPass();
	if (pass)
		yield 'Llevar pase de movilidad';
	else if (vaccinated)
		yield 'Obtener pase de movilidad';
	else
		yield 'Sugerencia: vacunarse';
}
