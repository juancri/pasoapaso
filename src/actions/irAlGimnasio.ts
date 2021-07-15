
import { EntityFactory } from '../types';

export default async function* irAlGimnasio(factory: EntityFactory): AsyncIterable<string>
{
	const comuna = await factory.requestComuna();
	if (comuna.phase === 1)
	{
		// In quarantine
		yield 'Los gimnasios no pueden operar en cuarentena';
		return;
	}
	if (comuna.phase === 4)
	{
		// Open
		yield 'Asistencia permitida en espacios abiertos y cerrados';
		return;
	}
	if (comuna.phase === 2)
		yield 'Sólo de lunes a viernes';
	const vaccinated = await factory.requestVaccinated();
	yield vaccinated ?
		'Asistencia permitida en espacios abiertos y cerrados' :
		'Asistencia permitida solo en espacios abiertos';
	const pass = vaccinated && await factory.requestMobilityPass();
	if (pass)
		yield 'Llevar pase de movilidad';
	else if (vaccinated)
		yield 'Obtener pase de movilidad';
	else
		yield 'Sugerencia: vacunarse';
}
