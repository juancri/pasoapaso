
import { EntityFactory } from '../types';

export default async function* irAVotar(factory: EntityFactory): AsyncIterable<string>
{
	const vocal = await factory.requestBoolean('¿Eres vocal de mesa?');
	if (!vocal)
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
			const belongSpecific = await factory.requestBoolean('¿Eres militante de alguno deestos partidos políticos?: RN, UDI, Evópoli, PRI, Convergencia Social, PC, RD, Comunes o FRVS');
			if (!belongSpecific)
			{
				yield 'Debido a que militas en un partido político que no es parte de la primaria, no puedes ir a votar';
				factory.markFailure();
				return;
			}
		}
	}
	else
		yield 'Debido a que eres vocal de mesa, puedes desplazarte libremente para llegar a los locales de votación y en horarios de toque de queda';

	const comuna = await factory.requestComuna('¿En qué comuna vives?');
	const voteComuna = await factory.requestComuna('¿En qué comuna votas?');
	if (comuna.region !== voteComuna.region)
	{
		yield 'Debido a que debes trasladarte a otra región, debes portar la Consulta de Datos Electorales';
		yield 'Puedes obtener la Consulta de Datos Electorales <a target="_blank" href="https://consulta.servel.cl/">aquí</a>';
		yield 'Debido a que debes trasladarte a otra región, debes obtener tu pasaporte sanitario en <a target="_blank" href="https://www.c19.cl">c19.cl</a>';
	}

	const priority = !vocal && await factory.requestBoolean('¿Eres mayor de 60 años, estás embarazada o tienes algún tipo de discapacidad?');
	if (priority)
		yield 'Debido a que eres mayor de 60 años, estás embarazada o tienes algún tipo de discapacidad, tienes acceso preferente durante todo el día, pero se recomienda que asistas entre las 14:00 y 18:00 horas para evitar aglomeraciones';

	yield 'El horario de votación será entre las 8:00 y las 18:00 horas';
	yield 'Debes portar tu carné de identidad';
	yield 'Estas reglas son válidas solo para ir a votar y no se aplican a otras actividades';
	// TODO: En el caso de las personas que deban trasladarse a votar a provincias o regiones que requieran un examen PCR para ingresar, deberán portar dicho informe, el cual no podrá tener una antigüedad mayor a 72 horas
	yield 'Puedes ver todas las normas <a target="_blank" href="https://www.gob.cl/noticias/gobierno-realiza-llamado-participar-en-las-primarias-presidenciales-y-entrega-detalles-sobre-el-voto-seguro/">aquí</a>';
}
