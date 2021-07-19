
import { EntityFactory } from "../types";

export default async function* viajar(factory: EntityFactory): AsyncIterable<string>
{
	const origin = await factory.requestComuna('Comuna de origen');
	const destination = await factory.requestComuna('Comuna de destino');

	if (origin.region !== destination.region)
	{
		yield "Debido a que las comunas están en regiones diferentes, necesitas un pasaporte sanitario";
		yield 'Obtén tu pasaporte sanitario en <a target="_blank" href="https://www.c19.cl">c19.cl</a>';

		if (destination.region === 11)
			yield 'Para ingresar a la Región de Aysén, necesitas un examen PCR. Revisa los detalles <a target="_blank" href="https://seremi11.redsalud.gob.cl/coronavirus/">aquí</a>.';
		if (destination.region === 12)
			yield 'Para ingresar a la Región de Magallanes, necesitas un examen PCR. Revisa los detalles <a target="_blank" href="https://seremisaludmagallanes.cl/barrera/">aquí</a>.';
		yield 'Recuerde consultar con la <a target="_blank" href="https://www.minsal.cl/secretarias-regionales-ministeriales-de-salud/">SEREMI de Salud</a> de la región de destino si existien disposiciones y requisitos extraordinarios';
	}

	if (origin.phase === 1 || destination.phase === 1)
	{
		const why = origin.phase === 1 ? "origen" : "destino";
		yield `Debido a que la comuna de ${why} está en cuarentena, necesitas un salvoconducto individual, PUC u otro permiso de <a target="_blank" href="https://www.comisariavirtual.cl">comisaría virtual</a>`;
	}
	else if (origin.phase === 2 || destination.phase === 2)
	{
		const why = origin.phase === 2 ? "origen" : "destino";
		const vaccinated = await factory.requestVaccinated();
		const pass = vaccinated && await factory.requestMobilityPass();
		if (vaccinated)
		{
			yield `Debido a que la comuna de ${why} está en transición, debes portar tu pase de movilidad`;
			if (!pass)
				yield 'Puedes obtener tu pase de movilidad <a target="_blank" href="https://mevacuno.gob.cl/">aquí</a>';
		}
		else
		{
			yield `Debido a que la comuna de ${why} está en transición y no estás vacunado, necesitas un salvoconducto individual, PUC u otro permiso de <a target="_blank" href="https://www.comisariavirtual.cl">comisaría virtual</a>`;
			yield "¡Vacúnate!";
		}
	}
	else if (origin.region === destination.region)
	{
		yield "Debido a que ambas comunas están en una fase avanzada, puedes moverte libremente entre ellas";
	}

	yield 'Independiente de estas normas, es posible que existan cordones o aduanas sanitarias. Puedes ver la información actualizada <a target="_blank" href="https://www.chileatiende.gob.cl/coronavirus/cuarentena">aquí</a>.';
}
