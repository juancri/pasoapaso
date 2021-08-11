
import { EntityFactory } from "../types";

export default async function* viajar(factory: EntityFactory): AsyncIterable<string>
{
	const chilean = await factory.requestBoolean('¿Eres chileno (sin importar tu país de residencia) o extranjero residente en Chile?');
	if (!chilean)
	{
		factory.markFailure();
		yield 'La validación de vacunas en el extranjero está disponible sólo para chilenos o extranjeros residentes en Chile (personas que tengan RUT)';
		return;
	}

	const complete = await factory.requestBoolean('¿Tienes la pauta de vacunación completa (dos dosis, cuando corresponda)?');
	if (!complete)
	{
		factory.markFailure();
		yield 'La validación de vacunas requiere que tengas tu pauta de vacunación completa';
		return;
	}

	const vaccine = await factory.requestBoolean('¿Fuiste vacunado con Moderna, Pfizer/BioNTech, Janssen (Johnson&Johnson), Oxford/AstraZeneca, Sinopharm, Sinovac, CanSino o Generium (Sputnik-V)?');
	if (!vaccine)
	{
		factory.markFailure();
		yield 'La validación sólo está aprobada para las vacunas del listado';
		return;
	}

	yield 'Cumples con todos los requisitos';
	yield 'Puedes ingresar al formulario de validación de vacuna <a href="https://validacionvacunacion.minsal.cl/surveys/?s=N3RF8JYH7LRYF7E7" target="_blank">aquí</a>';

	const digitalSignature = await factory.requestBoolean('¿Tienes un documento digital con firma electrónica avanzada o un código QR que acredite que la información es emitida por un organismo oficial de gobierno?');
	if (digitalSignature)
	{
		yield 'Debido a que tienes un documento digital con firma electrónica avanzada o un código QR que acredite que la información es emitida por un organismo oficial de gobierno, basta con este documento para acreditar tu vacuna';
		return;
	}
	else
	{
		yield 'Debido a que no tienes un documento digital con firma electrónica avanzada o un código QR que acredite que la información es emitida por un organismo oficial de gobierno, deberás adjuntar tu pasaporte u otra forma de acreditar que te encontrabas en el país donde recibiste la vacuna en la fecha indicada por el certificado de vacunación de ese país';
		yield 'Por la misma razón, deberás adjuntar un resultado de examen realizado en un laboratorio autorizado en territorio chileno que certifique que tienes anticuerpos IgM/IgG positivos contra coronavirus, realizado al menos 14 días después de haber completado el proceso de vacunación';

		const language = await factory.requestBoolean('¿El documento físico que acredita tu vacunación está escrito en inglés o español?');
		if (!language)
			yield 'Debido a que el documento físico que acredita tu vacunación no está escrito en inglés o español, se te podrá solicitar adjuntar la traducción autorizada del certificado a alguno de estos dos idiomas';
	}

	yield 'Puedes leer más detalles <a href="https://www.minsal.cl/wp-content/uploads/2021/07/2021.07.28_VALIDACION-DE-INFORMACION-DE-VACUNAS-RECIBIDAS-EN-EL-EXTRANJERO.pdf" target="_blank">aquí</a>';
}
