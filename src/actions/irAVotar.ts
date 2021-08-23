
import { EntityFactory } from '../types';

export default async function* irAVotar(factory: EntityFactory): AsyncIterable<string>
{
	const isolation = await factory.requestBoolean('¿Estás cumpliendo alguna medida de aislamiento obligatorio?');
	if (isolation) {
		yield 'Debido a que estás cumpliendo una medida de aislamiento obligatorio, no puedes ir a votar';
		factory.markFailure();
		return;
	}

	const belong = await factory.requestBoolean('¿Eres militante de algún partido político?');
	if (belong)
	{
		const belongSpecific = await factory.requestBoolean('¿Eres militante de alguno deestos partidos políticos?: Partido Liberal, Nuevo Trato, Partido Socialista, Partido Por la Democracia, Democracia Cristiana, Partido Radical, Partido Progresista o Ciudadanos');
		if (!belongSpecific)
		{
			yield 'Debido a que militas en un partido político que no es parte de la primaria, no puedes ir a votar';
			factory.markFailure();
			return;
		}
	}

	const locales = await factory.requestLocalesVotacion();
	if (locales.length === 1 && locales[0])
		yield `El local de votación en tu circunscripción ${locales[0].circunscripcion} se encuentra en ${locales[0].direccion}, comuna de ${locales[0].comuna}`;
	else if (locales[0])
	{
		yield `Los locales de votación en tu circunscripción ${locales[0].circunscripcion} se encuentran en:`;
		for (const local of locales)
			yield `${local.direccion}, comuna de ${local.comuna}`;
	}
	yield 'El padrón válido para estas primarias es el que estaba vigente para las primarias de gobernadores, cerrado en octubre de 2020. Debes considerar esto si hiciste algún cambio de dirección en el último año.';
	yield 'Puedes consultar tus datos en <a href="https://consulta.servel.cl/" target="_blank">la web del servel</a>';
	yield 'El horario de votación es entre las 9:00 y las 18:00 horas';
	yield 'Puedes votar con tu cédula de identidad o pasaporte. Puedes utilizar documentos vencidos siempre que la fecha de vencimiento sea posterior al 31 de octubre de 2019.';
}
