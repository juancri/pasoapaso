
import { phaseNames, regiones } from '../data';
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
	yield `${comuna.name} está en ${phaseNames.get(comuna.phase)}`;

	const region = regiones.find(r => r.id === comuna.region);
	yield `${comuna.name} se encuentra en la ${region?.longName} y, por lo tanto, tiene toque de queda desde las ${region?.curfew.start} hasta las ${region?.curfew.end}`;

	if (comuna.phase === 4)
	{
		// Open
		yield `Debido a que ${comuna.name} está en apertura, puedes ir al gimnasio y estar en espacios abiertos y cerrados`;
		return;
	}
	if (comuna.phase === 2)
		yield `Debido a que ${comuna.name} está en transición, sólo puedes ir al ginmasio de lunes a viernes`;
	const vaccinated = await factory.requestVaccinated();
	yield vaccinated ?
		'Debido a que estás vacunado, puedes ir al gimnasio y estar en espacios abiertos y cerrados' :
		'Debido a que no estás vacunado, puedes ir al gimnasio y estar sólo en espacios abiertos';
	const pass = vaccinated && await factory.requestMobilityPass();
	if (pass)
		yield 'Lleva tu pase de movilidad';
	else if (vaccinated)
		yield 'Obtén tu pase de movilidad <a target="_blank" href="https://mevacuno.gob.cl/">aquí</a>';
	else
		yield '¡Vacúnate!';
}
