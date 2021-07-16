
import { EntityFactory } from "../types";

export default async function* viajar(factory: EntityFactory): AsyncIterable<string>
{
	// Phase?
	const origin = await factory.requestComuna('Comuna de origen');
	if (origin.phase > 2)
	{
		// Get destination
		const destination = await factory.requestComuna('Comuna de destino');
		const sameRegion = origin.region === destination.region;
		yield sameRegion ?
			'Libre desplazamiento' :
			'Libre desplazamiento obteniendo el pasaporte sanitario';
		return;
	}

	// Phase 1 or 2
	// Vaccinated and has pass?
	const vaccinated = await factory.requestVaccinated();
	const hasPass = vaccinated && await factory.requestMobilityPass();
	if (origin.phase === 1)
	{
		// In quarantine
		if (!vaccinated)
		{
			// Not vaccinated
			yield 'Prohibida la circulación';
			yield 'Se requieren permisos de Comisaría Virtual para desplazamiento';
			yield 'Sugerencia: Vacunarse';
			return;
		}

		// Vaccinated
		// TODO:  Is destination in the same territorial unit? Define what this means!

		// Has mobility pass?
		yield hasPass ?
			'Libre desplazamiento solo dentro de la unidad territorial en cuarentena' :
			'Obtener pase de movilidad';
		return;
	}

	// In transition (phase 2)
	// Destination?
	const destination = await factory.requestComuna('Comuna de destino');
	if (!vaccinated)
	{
		// Not vaccinated
		// TODO: Can I travel to another comuna that is in quarantine?
		const sameRegion = origin.region === destination.region;
		yield sameRegion ?
			'Puede trasladarse entre estas comunas ya que están en la misma región' :
			'Sin posibilidad de traslado interregional';
		return;
	}

	// Vaccinated
	// Destination in quarantine?
	if (destination.phase === 1) {
		// Destination is quarantine
		yield 'No puede trasladarse debido a que la comuna de destino está en cuarentena';
		return;
	}

	// Destination not in quarantine
	if (!hasPass)
		yield 'Obtener pase de movilidad';
	yield 'Puede viajar';
	if (origin.region != destination.region)
		yield 'Obtener el pasaporte sanitario en www.c19.cl';
}
