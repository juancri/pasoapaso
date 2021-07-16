
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
			yield "Sólo con permiso de comisaría virtual";
		}
		else
		{
			// Phase 2
			yield "Sin restricciones de lunes a viernes";
			yield "Sábados, domingos y festivos sólo con permiso de comisaría virtual";
		}

		yield "Vacúnate!";
		return;
	}

	// Vaccinated
	const hasPass = await factory.requestMobilityPass();
	if (!hasPass)
		yield "Obtén tu pase de movilidad para tener libre desplazamiento";

	// Has pass
	yield "Libre desplazamiento con pase de movilidad";
}
