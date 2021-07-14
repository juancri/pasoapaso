
import { EntityFactory } from "../types";

export default async function* viajar(factory: EntityFactory): AsyncIterable<string>
{
	// In quarantine?
	const origin = await factory.requestComuna('Comuna de origen');
	if (origin.phase === 1)
	{
		// In quarantine
		// Vaccinated?
		const vaccinated = await factory.requestVaccinated();
		if (!vaccinated)
		{
			// Not vaccinated
			yield 'Prohibida la circulación';
			yield 'Se requieren permisos de Comisaría Virtual para desplazamiento';
			yield 'Sugerencia: Vacunarse';
			return;
		}

		// Vaccinated
		// Is destination in the same territorial unit?
		const destination = await factory.requestComuna('Comuna de destino');
		if (origin === destination) {
			// TODO: Define behavior
			return;
		}

		// Has mobility pass?
		const hasPass = await factory.requestMobilityPass();
		if (!hasPass)
			yield 'Obtener pase de movilidad';
		yield 'Libre desplazamiento solo dentro de la unidad territorial en cuarentena';
	}

	// TODO: Complete
}
