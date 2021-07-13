
// Dependencies

import { Comuna, EntityGroup, Phase, Region } from "./types";
import { createBooleanEntityGroup } from './util';

// Phases

const PHASE_1: Phase = { name: "Cuarentena", number: 1 };
const PHASE_2: Phase = { name: "Transición", number: 2 };
// FIXME: use
// const PHASE_3: Phase = { name: "Preparación", number: 3 };
// const PHASE_4: Phase = { name: "Apertura", number: 4 };

// Regions and comunas

export const regions: Region[] = [
	{
		name: "Arica y Parinacota",
		comunas: [
			{ name: "Arica", phase: PHASE_1 }
		]
	},
	{
		name: "Araucanía",
		comunas: [
			{ name: "Temuco", phase: PHASE_2 }
		]
	}
];
export const comunas: EntityGroup<Comuna> = {
	name: 'Comuna',
	entities: regions
		.map(r => r.comunas)
		.flat()
};

// Boolean entity groups

export const vaccinated = createBooleanEntityGroup("¿Estás vacunado?");
export const mobilityPass = createBooleanEntityGroup("¿Tienes pase de movilidad?");
export const allVaccinated = createBooleanEntityGroup("¿Están todos los asistentes vacunados?");
export const interaction = createBooleanEntityGroup("¿Habrá interacción con el público?");
