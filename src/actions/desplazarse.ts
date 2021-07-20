
import { phaseNames } from "../data";
import { EntityFactory } from "../types";

export default async function* desplazarse(factory: EntityFactory): AsyncIterable<string> {

	const comuna = await factory.requestComuna();
	yield `${comuna.name} está en ${phaseNames.get(comuna.phase)}`;
	if (comuna.phase > 2) {
		// Not in quarantine
		yield "Debido a que tu comuna está en transición, puedes desplazarte libremente";
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
