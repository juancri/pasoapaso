
import { EntityFactory } from "../types";

export default async function* viajarDesdeChile(factory: EntityFactory): AsyncIterable<string>
{
	const vaccinated = await factory.requestAllVaccinated('¿Están todos los miembros del grupo, incluidos los menores de edad, vacunados en Chile?');
	if (!vaccinated)
	{
		factory.markFailure();
		yield 'Debido a que no todos están vacunados en Chile, deben obtener un permiso extraordinario en <a href="https://www.comisariavirtual.cl" href="_blank">comisaría virtual<a/>';
		yield 'Los niños sin pase de movilidad solo podrán viajar si el motivo de su viaje entra en una de las 4 causales del permiso “Solicitud Extraordinaria de Viaje al Extranjero” de Comisaría Virtual. Puedes ver los detalles <a href="https://interior.cerofilas.gob.cl/etapas/ver/25948527/0" target="_blank">aquí</a>.';
		yield 'En caso de proporcionar antecedentes falsos, te expones a sumarios sanitarios y multas';
		yield '¡Vacúnate!';
		return;
	}

	yield 'Debido a que todos los integrantes del grupo están vacunados en Chile, pueden viajar obteniendo su pase de movilidad <a target="_blank" href="https://mevacuno.gob.cl/">aquí</a>';
	yield 'Los niños sin pase de movilidad solo podrán viajar si el motivo de su viaje entra en una de las 4 causales del permiso “Solicitud Extraordinaria de Viaje al Extranjero” de Comisaría Virtual. Puedes ver los detalles <a href="https://interior.cerofilas.gob.cl/etapas/ver/25948527/0" target="_blank">aquí</a>.';
	yield 'La salida de Chile está permitida a través del Aeropuerto Comodoro Arturo Merino Benítez de Santiago y pasos terrestres habilitados. Puedes revisar el estado de los pasos terrestres entre Chile y Argentina <a href="https://www.argentina.gob.ar/seguridad/pasosinternacionales" target="_blank">aquí</a>.';
	yield 'Te recomendamos utilizar una mascarilla certificada durante el viaje. El uso de mascarilla es obligatorio en el avión.';
	yield 'Recuerda que la salud de todos es tu responsabilidad';
}
