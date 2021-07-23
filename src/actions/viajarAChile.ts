
import { EntityFactory } from "../types";

export default async function* viajarAChile(factory: EntityFactory): AsyncIterable<string>
{
	const chileanOrResident = await factory.requestBoolean('¿Son todos los miembros del grupo chilenos o extranjeros residentes en Chile?');
	if (!chileanOrResident)
	{
		factory.markFailure();
		yield 'El ingreso a Chile está permitodo sólo para chilenos o extranjeros residentes en Chile';
		yield 'Puedes obtener un permiso para casos excepcionales en <a href="https://www.c19.cl" target="_blank">c19.cl</a>';
		return;
	}

	const hasKids = await factory.requestBoolean('¿Hay niños en el grupo de viaje?');
	const hasSmallKids = hasKids && await factory.requestBoolean('¿Hay algún menor de 14 años en el grupo de viaje?');
	const vaccinatedQuestion = hasKids ?
		'¿Están todos los adultos del grupo vacunados en Chile?' :
		'¿Están todos los miembros del grupo vacunados en Chile?';
	const vaccinated = hasSmallKids || await factory.requestAllVaccinated(vaccinatedQuestion);
	console.log(hasSmallKids);
	const hotelDeTransito = (!vaccinated && !hasKids) || (!hasSmallKids && await factory.requestBoolean('¿Desean quedarse en un hotel de tránsito?'));

	yield 'El grupo debe obtener su pasaporte sanitario en <a href="https://www.c19.cl" target="_blank">c19.cl</a>';
	yield 'Todos los miembros del grupo deben incluir un PCR con resultado negativo realizado máximo 72 horas antes de la hora de embarque';
	if (!vaccinated && !hasKids)
		yield 'Debido a que no todos los miembros del grupo están vacunados, deberán realizar el aislamiento estricto obligatorio de 10 días en un hotel de tránsito';
	else if (!vaccinated && hasKids && !hasSmallKids)
		yield 'Debido a que no todos los adultos del grupo están vacunados, deberán realizar el aislamiento estricto obligatorio de 10 días en un hotel de tránsito';
	else if (hasSmallKids)
		yield 'Debido a que el grupo incluye a niños menores de 14 años, deberán realizar el aislamiento estricto obligatorio de 10 días en un domicilio particular declarado';
	if (!hotelDeTransito)
		yield 'Todas las personas dentro de la misma declaración deberán realizar el aislamiento estricto obligatorio de 10 días en el mismo lugar';
	yield hotelDeTransito ?
		'Es importante que verifiques que todos los datos personales están ingresados correctamente' :
		'Es importante que verifiques que todos los datos personales y el domicilio declarado están ingresados correctamente';
	yield 'Recuerda que el formulario para obtener el pasaporte sanitario es una declaración jurada y, por lo tanto, ingresar información falsa es un delito';

	if (!hotelDeTransito)
	{
		yield 'Deberás declarar la dirección donde realizarán el aislamiento estricto obligatorio de 10 días';
		yield 'En la misma declaración, debes incluir a todos los cohabitantes de la dirección declarada';
		yield 'Todos quienes realicen el aislamiento estricto obligatorio, incluidos los cohabitantes, tendrán su pase de movilidad suspendido por 10 días';
		yield 'En caso de que llegues a la casa de un amigo o familiar, todos quienes estén en la casa serán incluidos en el aislamiento estricto obligatorio';
		yield 'Tienen un máximo de 5 horas para llegar a la dirección del aislamiento desde el punto de entrada a Chile';
		yield 'Deberán utilizar un transporte terrestre particular o contratado privado. No pueden utilizar ningún medio de transporte público incluído vuelos comerciales.';
		yield 'Durante el trayecto, no está permitido que se detengan. Te recomendamos comprar lo necesario para el viaje en el aeropuerto.';
	}

	yield 'Se les realizará un test PCR o de antígenos al ingresar a Chile';
	yield 'En caso de que el test a la entrada sea positivo, todos los miembros del grupo serán trasladado a una residencia sanitaria';
	if (vaccinated && hotelDeTransito)
		yield 'Todos quienes realicen el aislamiento estricto obligatorio tendrán su pase de movilidad suspendido por 10 días';
	yield hotelDeTransito ?
		'En caso de que se detecte que un miembro del grupo está contagiado durante el aislamiento estricto obligatorio, todos el grupo será trasladado a una residencia sanitaria' :
		'En caso de que se detecte que un miembro del grupo está contagiado durante el aislamiento estricto obligatorio, todos los ocupantes de la casa serán trasladados a una residencia sanitaria';
	yield 'Te recomendamos utilizar una mascarilla certificada durante el viaje. El uso de mascarilla es obligatorio en el avión.';
	yield 'Recuerda que la salud de todos es tu responsabilidad';
	yield 'Si no cumples estas medidas, te expones a sumarios sanitarios y multas';
	yield 'Estas normas son válidas a partir el lunes 26 de julio';
}
