
import { EntityFactory } from "../types";

export default async function* desplazarse(factory: EntityFactory): AsyncIterable<string> {

	// In quarantine?
	const comuna = await factory.requestComuna();
	if (comuna.phase > 1) {
		// Not in quarantine
		yield "Libre desplazamiento";
		return;
	}

	// In quarantine
	// Vaccinated?
	const vaccinated = await factory.requestVaccinated();
	if (!vaccinated) {
		// Not vaccinated
		yield "Sacar permiso de comisaría virtual";
		yield "Sugerencia: Vacunarse";
		return;
	}

	// Vaccinated
	// Has pass?
	const hasPass = await factory.requestMobilityPass();
	if (!hasPass) {
		// Does not have pass
		yield "Sacar pase de movilidad para tener libre desplazamiento";
		return;
	}

	// Has pass
	yield "Libre desplazamiento";
}
