
import { EntityFactory } from '../types';

export default async function* irAlGimnasio(factory: EntityFactory): AsyncIterable<string>
{
	const comuna = await factory.requestComuna();
	if (comuna.phase === 1)
	{
		// In quarantine
		yield 'Los gimnasios no pueden operar en cuarentena';
		factory.markFailure();
		return;
	}
	if (comuna.phase === 4)
	{
		// Open
		yield 'Puedes ir al gimnasio y estar en espacios abiertos y cerrados';
		return;
	}
	if (comuna.phase === 2)
		yield 'Sólo de lunes a viernes';
	const vaccinated = await factory.requestVaccinated();
	yield vaccinated ?
		'Puedes ir al gimnasio y estar en espacios abiertos y cerrados' :
		'Puedes ir al gimnasio y estar sólo en espacios abiertos';
	const pass = vaccinated && await factory.requestMobilityPass();
	if (pass)
		yield 'Lleva tu pase de movilidad';
	else if (vaccinated)
		yield 'Obtén tu pase de movilidad <a target="_blank" href="https://mevacuno.gob.cl/">aquí</a>';
	else
		yield '¡Vacúnate!';
}
