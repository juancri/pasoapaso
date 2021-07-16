
import { EntityFactory } from "../types";

export default async function* desplazarse(factory: EntityFactory): AsyncIterable<string> {

	const comuna = await factory.requestComuna();
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
		yield "Obtén tu pase de movilidad";

	// Has pass
	yield "Libre desplazamiento";
}
