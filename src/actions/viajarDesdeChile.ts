
import { EntityFactory } from "../types";

export default async function* viajarDesdeChile(factory: EntityFactory): AsyncIterable<string>
{
	const vaccinated = await factory.requestAllVaccinated('¿Están todos los miembros del grupo vacunados?');
	const kids = vaccinated && await factory.requestBoolean('¿Hay algún menor de edad en el grupo?');
	if (!vaccinated)
	{
		factory.markFailure();
		yield 'Debido a que no todos están vacunados, deben obtener un permiso extraordinario en <a href="https://www.comisariavirtual.cl" href="_blank">comisaría virtual<a/>';
		yield 'En caso de proporcionar antecedentes falsos, te expones a sumarios sanitarios y multas';
		yield '¡Vacúnate!';
		return;
	}
	else if (kids) {
		factory.markFailure();
		yield 'Los menores de edad sólo pueden viajar fuera de Chile por motivos de fuerza mayor. En ese caso, deben obtener un permiso extraordinario en <a href="https://www.comisariavirtual.cl" href="_blank">comisaría virtual<a/>';
		yield 'En caso de proporcionar antecedentes falsos, te expones a sumarios sanitarios y multas';
	}
	else
		yield 'Debido a que todos los integrantes del grupo son mayores de edad vacunados, pueden viajar obteniendo su pase de movilidad <a target="_blank" href="https://mevacuno.gob.cl/">aquí</a>';

	yield 'Te recomendamos utilizar una mascarilla certificada durante el viaje. El uso de mascarilla es obligatorio en el avión.';
	yield 'Recuerda que la salud de todos es tu responsabilidad';
	yield 'Estas normas son válidas a partir el lunes 26 de julio';
}
