
import { EntityFactory } from "../types";

export default async function* viajarAChile(factory: EntityFactory): AsyncIterable<string>
{
	const chileanOrResident = await factory.requestBoolean('¿Son todos los miembros del grupo chilenos (sin importar su país de residencia) o extranjeros residentes en Chile?');
	if (!chileanOrResident)
	{
		factory.markFailure();
		yield 'El ingreso a Chile está permitido sólo para chilenos o extranjeros residentes en Chile';
		yield 'Puedes obtener un permiso para casos excepcionales en <a href="https://www.c19.cl" target="_blank">c19.cl</a>';
		yield 'También pueden entrar extranjeros no residentes en Chile con salvoconducto en el consulado chileno de origen y casos contemplados en el <a href="https://www.bcn.cl/leychile/navegar?idNorma=1143540" target="_blank">decreto 102 del Ministerio del Interior<a/>';
		yield 'Revisa el consulado chileno más cercano al punto de origen de tu viaje <a href="https://www.serviciosconsulares.gob.cl/tramites/site/edic/base/port/consulados.html" target="_blank">aquí</a>';
	}
	else
	{
		const hasKids = await factory.requestBoolean('¿Hay menores de edad en el grupo de viaje?');
		const hasAdults = !hasKids || await factory.requestBoolean('¿Hay adultos en el grupo de viaje?');
		const hasSmallKids = hasKids && await factory.requestBoolean('¿Hay algún menor de 14 años en el grupo de viaje?');
		const vaccinatedInChileQuestion = hasKids && hasAdults ?
			'¿Están todos los adultos del grupo vacunados en Chile?' :
			'¿Están todos los miembros del grupo vacunados en Chile?';
		const vaccinatedInChile = hasSmallKids || await factory.requestAllVaccinated(vaccinatedInChileQuestion);
		const vaccinatedInOtherCountryQuestion = hasKids && hasAdults ?
			'¿Están todos los adultos del grupo vacunados en otro país?' :
			'¿Están todos los miembros del grupo vacunados en otro país?';
		const vaccinatedInOtherCountry = !vaccinatedInChile && await factory.requestBoolean(vaccinatedInOtherCountryQuestion);
		const temporaryValidation = vaccinatedInOtherCountry && await factory.requestBoolean('¿Tienes tu comprobante de validación temporal de vacunación?');
		const hotelDeTransitoObligatorio = !vaccinatedInChile && !temporaryValidation && !hasSmallKids;
		const hotelDeTransito = hotelDeTransitoObligatorio || (hasAdults && await factory.requestBoolean('¿Desean quedarse en un hotel de tránsito?'));
		const beforeSeptember = await factory.requestBoolean('¿Tu ingreso Chile es anterior al 1 de septiembre?');
		const isolationDays = beforeSeptember ? 10 : 7;
		const isolationHours = isolationDays * 24;

		yield beforeSeptember ?
			'Debido a que tu ingreso a Chile es anterior al 1 de septiembre, el periodo de aislamiento será de 10 días' :
			'Debido a que tu ingreso a Chile no es anterior al 1 de septiembre, el periodo de aislamiento será de 7 días';
		yield 'El grupo debe obtener su pasaporte sanitario en <a href="https://www.c19.cl" target="_blank">c19.cl</a>';
		yield hasSmallKids ?
			'Todos los miembros del grupo de 2 años o más deben incluir un PCR con resultado negativo realizado máximo 72 horas antes de la hora de embarque' :
			'Todos los miembros del grupo deben incluir un PCR con resultado negativo realizado máximo 72 horas antes de la hora de embarque';
		if (hotelDeTransitoObligatorio)
			yield hasKids ?
				`Debido a que no todos los adultos del grupo están vacunados en Chile ni tienen una validación temporal de vacunación, deberán realizar el aislamiento estricto obligatorio de ${isolationDays} días en un hotel de tránsito` :
				`Debido a que no todos los miembros del grupo están vacunados en Chile ni tienen una validación temporal de vacunación, deberán realizar el aislamiento estricto obligatorio de ${isolationDays} días en un hotel de tránsito`;
		if (hasSmallKids)
			yield `Debido a que el grupo incluye a niños menores de 14 años, deberán realizar el aislamiento estricto obligatorio de ${isolationDays} días en un domicilio particular declarado`;
		yield `Se entenderá que los ${isolationDays} días se cumplen una vez transcurridas ${isolationHours} horas desde el control de la aduana sanitaria en el paso fronterizo por el cual se hizo ingreso al país`;
		if (!hotelDeTransito)
			yield `Todas las personas dentro de la misma declaración deberán realizar el aislamiento estricto obligatorio de ${isolationDays} días en el mismo lugar`;
		yield hotelDeTransito ?
			'Es importante que verifiques que todos los datos personales están ingresados correctamente' :
			'Es importante que verifiques que todos los datos personales y el domicilio declarado están ingresados correctamente';
		yield 'Recuerda que el formulario para obtener el pasaporte sanitario es una declaración jurada y, por lo tanto, ingresar información falsa es un delito';
		if (!hotelDeTransito)
		{
			yield `Deberás declarar la dirección donde realizarán el aislamiento estricto obligatorio de ${isolationDays} días`;
			yield 'En la misma declaración, debes incluir a todos los cohabitantes de la dirección declarada';
			yield `Todos quienes realicen el aislamiento estricto obligatorio, incluidos los cohabitantes, tendrán su pase de movilidad suspendido por ${isolationDays} días`;
			yield 'En caso de que llegues a la casa de un amigo o familiar, todos quienes estén en la casa serán incluidos en el aislamiento estricto obligatorio';
			yield 'Deberán utilizar un transporte terrestre particular o contratado privado. No pueden utilizar ningún medio de transporte público incluído vuelos comerciales.';
			if (!hasAdults)
				yield 'Debido a que el grupo no incluye adultos, los menores de edad podrán trasladarse a su destino final ya sea en transporte público o privado, posterior a un resultado negativo para un test para SARS-CoV-2 efectuado en Chile';
			yield 'Se deberá utilizar mascarilla en todo momento durante el traslado';
			yield 'Está prohibido pernoctar o interactuar con otras personas durante el traslado';
			yield `En caso de que el lugar de aislamiento quede a más de dos horas del punto de ingreso al país, el conductor del medio de transporte deberá aislarse por los mismos ${isolationDays} días`;
			yield 'Una vez arribado al lugar de aislamiento, deberás dar aviso de tu llegada y ubicación a la autoridad sanitaria en una plataforma electrónica dispuesta para estos efectos';
		}

		yield 'La entrada a Chile está permitida a través del Aeropuerto Comodoro Arturo Merino Benítez de Santiago y pasos terrestres habilitados. Puedes revisar el estado de los pasos terrestres entre Chile y Argentina <a href="https://www.argentina.gob.ar/seguridad/pasosinternacionales" target="_blank">aquí</a>.';
		yield hasSmallKids ?
			'Se le realizará un test PCR o de antígenos a todos los miembros del grupo de 2 años o más al ingresar a Chile' :
			'Se les realizará un test PCR o de antígenos al ingresar a Chile';
		yield 'En caso de que el test a la entrada sea positivo, todos los miembros del grupo serán trasladado a una residencia sanitaria';
		if (vaccinatedInChile && hotelDeTransito)
			yield `Todos quienes realicen el aislamiento estricto obligatorio tendrán su pase de movilidad suspendido por ${isolationDays} días`;
		yield hotelDeTransito ?
			'En caso de que se detecte que un miembro del grupo está contagiado durante el aislamiento estricto obligatorio, todos el grupo será trasladado a una residencia sanitaria' :
			'En caso de que se detecte que un miembro del grupo está contagiado durante el aislamiento estricto obligatorio, todos los ocupantes de la casa serán trasladados a una residencia sanitaria';
		yield 'Te recomendamos utilizar una mascarilla certificada durante el viaje. El uso de mascarilla es obligatorio en el avión.';
		yield 'Recuerda que la salud de todos es tu responsabilidad';
		yield 'Si no cumples estas medidas, te expones a sumarios sanitarios y multas';
		yield 'Durante el traslado a tu lugar de aislamiento, deberás cumplir con las medidas sanitarias pertinentes y utilizar mascarilla en todo momento';
	}
	yield 'Debido a los procedimientos especiales para prevenir el ingreso de nuevas variantes al país, el tiempo de espera en el aeropuerto es mayor a lo normal';
}
