
import { phaseNames, regiones } from "../data";
import { EntityFactory } from "../types";

export default async function* viajar(factory: EntityFactory): AsyncIterable<string>
{
	const origin = await factory.requestComuna('Comuna de origen');
	const destination = await factory.requestComuna('Comuna de destino', [origin.name]);
	const originRegion = regiones.find(r => r.id === origin.region);
	const destinationRegion = regiones.find(r => r.id === destination.region);
	const before = await factory.getBeforeDate(
		'viajar',
		origin.next?.date, destination.next?.date,
		originRegion?.next?.date, destinationRegion?.next?.date);
	const future = !before;
	const originPhase = (!before && origin.next) ? origin.next.phase : origin.phase;
	const destinationPhase = (!before && destination.next) ? destination.next.phase : destination.phase;
	const originCurfew = (!before && originRegion?.next) ? originRegion.next.curfew : originRegion?.curfew;
	const destinationCurfew = (!before && destinationRegion?.next) ? destinationRegion.next.curfew : destinationRegion?.curfew;

	yield `${origin.name} ${future ? 'estará' : 'está'} en ${phaseNames.get(originPhase)}`;
	yield `${destination.name} ${future ? 'estará' : 'está'} en ${phaseNames.get(destinationPhase)}`;

	if (origin.region === destination.region)
	{
		yield `Ambas comunas se encuentran en la ${originRegion?.longName} y, por lo tanto, ${future ? 'tendrán' : 'tienen'} toque de queda desde las ${originCurfew?.start} hasta las ${originCurfew?.end}`;
	}
	else
	{
		yield `${origin.name} se encuentra en la ${originRegion?.longName} y, por lo tanto, ${future ? 'tendrá' : 'tiene'} toque de queda desde las ${originCurfew?.start} hasta las ${originCurfew?.end}`;
		yield `${destination.name} se encuentra en la ${destinationRegion?.longName} y, por lo tanto, ${future ? 'tendrá' : 'tiene'} toque de queda desde las ${destinationCurfew?.start} hasta las ${destinationCurfew?.end}`;
		yield `Debido a que ${origin.name} y ${destination.name} están en regiones diferentes, necesitas un pasaporte sanitario`;
		yield 'Obtén tu pasaporte sanitario en <a target="_blank" href="https://www.c19.cl">c19.cl</a>';

		if (destination.region === 11)
			yield `Debido a que ${destination.name} está en la región de Aysén, necesitas un examen PCR para ingresar. Revisa los detalles <a target="_blank" href="https://seremi11.redsalud.gob.cl/coronavirus/">aquí</a>.`;
		if (destination.region === 12)
			yield `Debido a que ${destination.name} está en la región de Magallanes, necesitas un examen PCR para ingresar. Revisa los detalles <a target="_blank" href="https://seremisaludmagallanes.cl/barrera/">aquí</a>.`;
		yield 'Recuerda consultar con la <a target="_blank" href="https://www.minsal.cl/secretarias-regionales-ministeriales-de-salud/">SEREMI de Salud</a> de la región de destino si existien disposiciones y requisitos extraordinarios';
	}

	if (originPhase === 1 || destinationPhase === 1)
	{
		const why = origin.phase === 1 ? "origen" : "destino";
		yield `Debido a que la comuna de ${why} ${future ? 'estará' : 'está'} en cuarentena, necesitas un salvoconducto individual, PUC u otro permiso de <a target="_blank" href="https://www.comisariavirtual.cl">comisaría virtual</a>`;
	}
	else if (originPhase === 2 || destinationPhase === 2)
	{
		const why = origin.phase === 2 ? "origen" : "destino";
		const vaccinated = await factory.requestVaccinated();
		const pass = vaccinated && await factory.requestMobilityPass();
		if (vaccinated)
		{
			yield `Debido a que la comuna de ${why} ${future ? 'estará' : 'está'} en transición, debes portar tu pase de movilidad`;
			if (!pass)
				yield 'Puedes obtener tu pase de movilidad <a target="_blank" href="https://mevacuno.gob.cl/">aquí</a>';
		}
		else
		{
			yield `Debido a que la comuna de ${why} ${future ? 'estará' : 'está'} en transición y no estás vacunado, necesitas un salvoconducto individual, PUC u otro permiso de <a target="_blank" href="https://www.comisariavirtual.cl">comisaría virtual</a>`;
			yield "¡Vacúnate!";
		}
	}
	else if (origin.region === destination.region)
	{
		yield `Debido a que ambas comunas ${future ? 'estarán' : 'están'} en una fase avanzada, puedes moverte libremente entre ellas`;
	}

	yield 'Independiente de estas normas, es posible que existan cordones o aduanas sanitarias. Puedes ver la información actualizada <a target="_blank" href="https://www.chileatiende.gob.cl/coronavirus/cuarentena">aquí</a>.';
}
