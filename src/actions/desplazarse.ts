
import { phaseNames, regiones } from "../data";
import { EntityFactory } from "../types";

export default async function* desplazarse(factory: EntityFactory): AsyncIterable<string> {

	const comuna = await factory.requestComuna();
	const region = regiones.find(r => r.id === comuna.region);
	const before = await factory.getBeforeDate(comuna.next?.date, region?.next?.date);
	const future = !before;
	const phase = (!before && comuna.next) ? comuna.next.phase : comuna.phase;
	const curfew = (!before && region?.next) ? region.next.curfew : region?.curfew;

	yield `${comuna.name} ${future ? 'estará' : 'está'} en ${phaseNames.get(phase)}`;
	yield `${comuna.name} se encuentra en la ${region?.longName} que ${future ? 'tendrá' : 'tiene'} toque de queda desde las ${curfew?.start} hasta las ${curfew?.end}`;
	if (phase > 2)
	{
		// Not in quarantine
		yield `Debido a que ${comuna.name} ${future ? 'estará' : 'está'} en ${phaseNames.get(phase)}, ${future ? 'podrás' : 'puedes'} desplazarte libremente`;
		return;
	}

	const vaccinated = await factory.requestVaccinated();
	if (!vaccinated)
	{
		if (comuna.phase === 1)
		{
			yield 'Obtén tu permiso en <a target="_blank" href="https://www.comisariavirtual.cl">comisariavirtual.cl</a>';
		}
		else
		{
			// Phase 2
			yield "Sin restricciones de lunes a viernes";
			yield 'Sábados, domingos y festivos sólo con permiso de <a target="_blank" href="https://www.comisariavirtual.cl">comisaría virtual</a>';
		}

		yield "¡Vacúnate!";
		return;
	}

	// Vaccinated
	const hasPass = await factory.requestMobilityPass();
	yield hasPass ?
		'Puedes desplazarte libremente con tu pase de movilidad' :
		'Obtén tu pase de movilidad <a target="_blank" href="https://mevacuno.gob.cl/">aquí</a> para desplazarte libremente';
}
