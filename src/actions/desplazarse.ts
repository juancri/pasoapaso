
import { EntityFactory } from "../types";

const PHASE_MESSAGES = new Map<number, string>([
	[1, "Tu comuna está en cuarentena"],
	[2, "Tu comuna está en transición"],
	[3, "Tu comuna está en preparación"],
	[4, "Tu comuna está en apertura"]
]);

export default async function* desplazarse(factory: EntityFactory): AsyncIterable<string> {

	const comuna = await factory.requestComuna();
	yield PHASE_MESSAGES.get(comuna.phase) as string;
	if (comuna.phase > 2) {
		// Not in quarantine
		yield "Libre desplazamiento";
		return;
	}

	const vaccinated = await factory.requestVaccinated();
	if (!vaccinated)
	{
		if (comuna.phase === 1)
		{
			yield 'Obtén tu permiso en <a href="https://www.comisariavirtual.cl">comisariavirtual.cl</a>';
		}
		else
		{
			// Phase 2
			yield "Sin restricciones de lunes a viernes";
			yield 'Sábados, domingos y festivos sólo con permiso de <a href="https://www.comisariavirtual.cl">comisaría virtual</a>';
		}

		yield "¡Vacúnate!";
		return;
	}

	// Vaccinated
	const hasPass = await factory.requestMobilityPass();
	yield hasPass ?
		'Puedes desplazarte libremente con tu pase de movilidad' :
		'Obtén tu pase de movilidad <a href="https://mevacuno.gob.cl/">aquí</a> para desplazarte libremente';
}
