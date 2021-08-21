
import Enumerable from 'linq';

import { localesVotacion } from '../data';
import { EntityFactory } from '../types';

const COMUNAS = Enumerable
	.from(localesVotacion)
	.select(l => l.comuna)
	.distinct()
	.toArray();

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
		const belongSpecific = await factory.requestBoolean('¿Eres militante de alguno deestos partidos políticos?: Partido Liberal, Nuevo Trato, Partido Socialista, Partido Por la Democracia, Democracia Cristiana o Partido Radical');
		if (!belongSpecific)
		{
			yield 'Debido a que militas en un partido político que no es parte de la primaria, no puedes ir a votar';
			factory.markFailure();
			return;
		}
	}

	const local = await factory.requestLocalVotacion();
	yield `El local de votación en tu circunscripción ${local.circunscripcion} se encuentra en ${local.direccion}, comuna de ${local.comuna}`;
	yield 'El horario de votación es entre las 9:00 y las 18:00 horas';
	yield 'Debes portar tu carné de identidad';
}
