
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
			'Tienes libre desplazamiento en la misma región' :
			'Puedes desplazarte obteniendo tu pasaporte sanitario en <a href="https://www.c19.cl">c19.cl</a>';
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
			yield 'No puedes desplazarte libremente en una comuna en cuarentena si no estás vacunado ni tienes tu pase de movilidad';
			yield 'Puedes obtener un permiso en <a href="https://comisariavirtual.cl">Comisaría Virtual</a> para desplazarte';
			yield '¡Vacúnate!';
			return;
		}

		// Vaccinated
		// TODO:  Is destination in the same territorial unit? Define what this means!

		// Has mobility pass?
		yield hasPass ?
			'Puedes desplazarte libremente solo dentro de la unidad territorial en cuarentena' :
			'Obtén tu pase de movilidad <a href="https://mevacuno.gob.cl/">aquí</a>';
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
			'Puedes trasladarte entre estas comunas ya que están en la misma región' :
			'No puedes trasladarte a otra comuna';
		yield '¡Vacúnate!';
		return;
	}

	// Vaccinated
	// Destination in quarantine?
	if (destination.phase === 1) {
		// Destination is quarantine
		yield 'No puedes trasladarte debido a que la comuna de destino está en cuarentena';
		return;
	}

	// Destination not in quarantine
	if (!hasPass)
		yield 'Debes obtener tu pase de movilidad <a href="https://mevacuno.gob.cl/">aquí</a>';
	yield 'Puede viajar';
	if (origin.region != destination.region)
		yield 'Debes obtener tu pasaporte sanitario en <a href="https://www.c19.cl">c19.cl</a>';
}
