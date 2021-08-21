
// Dependencies

import { Comuna, EntityGroup, LocalVotacion, Region, VaccinationDate } from './types';
import { createBooleanEntityGroup } from './util';

// Comunas

export const regiones: Region[] = [
	{
		id: 15,
		name: 'Arica y Parinacota',
		longName: 'Región de Arica y Parinacota',
		curfew: { start: '22:00', end: '05:00' }
	},
	{
		id: 1,
		name: 'Tarapacá',
		longName: 'Región de Tarapacá',
		curfew: { start: '22:00', end: '05:00' }
	},
	{
		id: 2,
		name: 'Antofagasta',
		longName: 'Región de Antofagasta',
		curfew: { start: '00:00', end: '05:00' }
	},
	{
		id: 3,
		name: 'Atacama',
		longName: 'Región de Atacama',
		curfew: { start: '22:00', end: '05:00' }
	},
	{
		id: 4,
		name: 'Coquimbo',
		longName: 'Región de Coquimbo',
		curfew: { start: '22:00', end: '05:00' }
	},
	{
		id: 5,
		name: 'Valparaíso',
		longName: 'Región de Valparaíso',
		curfew: { start: '00:00', end: '05:00' }
	},
	{
		id: 13,
		name: 'Metropolitana',
		longName: 'Región Metropolitana',
		curfew: { start: '22:00', end: '05:00' }
	},
	{
		id: 6,
		name: 'O\'Higgins',
		longName: 'Región de O\'Higgins',
		curfew: { start: '00:00', end: '05:00' }
	},
	{
		id: 7,
		name: 'Maule',
		longName: 'Región del Maule',
		curfew: { start: '00:00', end: '05:00' }
	},
	{
		id: 16,
		name: 'Ñuble',
		longName: 'Región de Ñuble',
		curfew: { start: '00:00', end: '05:00' }
	},
	{
		id: 8,
		name: 'Biobío',
		longName: 'Región del Biobío',
		curfew: { start: '00:00', end: '05:00' }
	},
	{
		id: 9,
		name: 'Araucanía',
		longName: 'Región de la Araucanía',
		curfew: { start: '00:00', end: '05:00' }
	},
	{
		id: 14,
		name: 'Los Ríos',
		longName: 'Región de Los Ríos',
		curfew: { start: '00:00', end: '05:00' }
	},
	{
		id: 10,
		name: 'Los Lagos',
		longName: 'Región de Los Lagos',
		curfew: { start: '00:00', end: '05:00' }
	},
	{
		id: 11,
		name: 'Aysén',
		longName: 'Región de Aysén',
		curfew: { start: '00:00', end: '05:00' }
	},
	{
		id: 12,
		name: 'Magallanes',
		longName: 'Región de Magallanes',
		curfew: { start: '00:00', end: '05:00' }
	}
];

export const comunas: EntityGroup<Comuna> = {
	name: 'Comuna',
	entities: [
		{
			"name": "Algarrobo",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Alhué",
			"phase": 4,
			"region": 13
		},
		{
			"name": "Alto Biobío",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Alto Hospicio",
			"phase": 3,
			"region": 1
		},
		{
			"name": "Alto del Carmen",
			"phase": 4,
			"region": 3
		},
		{
			"name": "Ancud",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Andacollo",
			"phase": 4,
			"region": 4
		},
		{
			"name": "Angol",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Antofagasta",
			"phase": 4,
			"region": 2
		},
		{
			"name": "Antuco",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Antártica",
			"phase": 3,
			"region": 12
		},
		{
			"name": "Arauco",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Arica",
			"phase": 4,
			"region": 15
		},
		{
			"name": "Aysén",
			"phase": 4,
			"region": 11
		},
		{
			"name": "Buin",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Bulnes",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Cabildo",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Cabo de Hornos",
			"phase": 4,
			"region": 12
		},
		{
			"name": "Cabrero",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Calama",
			"phase": 4,
			"region": 2
		},
		{
			"name": "Calbuco",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Caldera",
			"phase": 4,
			"region": 3
		},
		{
			"name": "Calera de Tango",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Calle Larga",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Camarones",
			"phase": 4,
			"region": 15
		},
		{
			"name": "Camiña",
			"phase": 4,
			"region": 1
		},
		{
			"name": "Canela",
			"phase": 4,
			"region": 4
		},
		{
			"name": "Carahue",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Cartagena",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Casablanca",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Castro",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Catemu",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Cauquenes",
			"phase": 3,
			"region": 7
		},
		{
			"name": "Cañete",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Cerrillos",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Cerro Navia",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Chaitén",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Chanco",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Chañaral",
			"phase": 4,
			"region": 3
		},
		{
			"name": "Chiguayante",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Chile Chico",
			"phase": 4,
			"region": 11
		},
		{
			"name": "Chillán",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Chillán Viejo",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Chimbarongo",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Cholchol",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Chonchi",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Chépica",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Cisnes",
			"phase": 4,
			"region": 11
		},
		{
			"name": "Cobquecura",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Cochamó",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Cochrane",
			"phase": 4,
			"region": 11
		},
		{
			"name": "Codegua",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Coelemu",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Coihueco",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Coinco",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Colbún",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Colchane",
			"phase": 4,
			"region": 1
		},
		{
			"name": "Colina",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Collipulli",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Coltauco",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Combarbalá",
			"phase": 4,
			"region": 4
		},
		{
			"name": "Concepción",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Conchalí",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Concón",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Constitución",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Contulmo",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Copiapó",
			"phase": 4,
			"region": 3
		},
		{
			"name": "Coquimbo",
			"phase": 4,
			"region": 4
		},
		{
			"name": "Coronel",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Corral",
			"phase": 3,
			"region": 14
		},
		{
			"name": "Coyhaique",
			"phase": 4,
			"region": 11
		},
		{
			"name": "Cunco",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Curacautín",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Curacaví",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Curaco de Vélez",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Curanilahue",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Curarrehue",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Curepto",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Curicó",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Dalcahue",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Diego de Almagro",
			"phase": 4,
			"region": 3
		},
		{
			"name": "Doñihue",
			"phase": 4,
			"region": 6
		},
		{
			"name": "El Bosque",
			"phase": 3,
			"region": 13
		},
		{
			"name": "El Carmen",
			"phase": 4,
			"region": 16
		},
		{
			"name": "El Monte",
			"phase": 3,
			"region": 13
		},
		{
			"name": "El Quisco",
			"phase": 4,
			"region": 5
		},
		{
			"name": "El Tabo",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Empedrado",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Ercilla",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Estación Central",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Florida",
			"phase": 2,
			"region": 8
		},
		{
			"name": "Freire",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Freirina",
			"phase": 4,
			"region": 3
		},
		{
			"name": "Fresia",
			"phase": 2,
			"region": 10
		},
		{
			"name": "Frutillar",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Futaleufú",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Futrono",
			"phase": 3,
			"region": 14
		},
		{
			"name": "Galvarino",
			"phase": 4,
			"region": 9
		},
		{
			"name": "General Lagos",
			"phase": 4,
			"region": 15
		},
		{
			"name": "Gorbea",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Graneros",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Guaitecas",
			"phase": 4,
			"region": 11
		},
		{
			"name": "Hijuelas",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Hualaihué",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Hualañé",
			"phase": 2,
			"region": 7
		},
		{
			"name": "Hualpén",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Hualqui",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Huara",
			"phase": 4,
			"region": 1
		},
		{
			"name": "Huasco",
			"phase": 4,
			"region": 3
		},
		{
			"name": "Huechuraba",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Illapel",
			"phase": 4,
			"region": 4
		},
		{
			"name": "Independencia",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Iquique",
			"phase": 4,
			"region": 1
		},
		{
			"name": "Isla de Maipo",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Isla de Pascua",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Juan Fernández",
			"phase": 4,
			"region": 5
		},
		{
			"name": "La Calera",
			"phase": 4,
			"region": 5
		},
		{
			"name": "La Cisterna",
			"phase": 3,
			"region": 13
		},
		{
			"name": "La Cruz",
			"phase": 4,
			"region": 5
		},
		{
			"name": "La Estrella",
			"phase": 4,
			"region": 6
		},
		{
			"name": "La Florida",
			"phase": 3,
			"region": 13
		},
		{
			"name": "La Granja",
			"phase": 3,
			"region": 13
		},
		{
			"name": "La Higuera",
			"phase": 4,
			"region": 4
		},
		{
			"name": "La Ligua",
			"phase": 4,
			"region": 5
		},
		{
			"name": "La Pintana",
			"phase": 3,
			"region": 13
		},
		{
			"name": "La Reina",
			"phase": 3,
			"region": 13
		},
		{
			"name": "La Serena",
			"phase": 4,
			"region": 4
		},
		{
			"name": "La Unión",
			"phase": 4,
			"region": 14
		},
		{
			"name": "Lago Ranco",
			"phase": 3,
			"region": 14
		},
		{
			"name": "Lago Verde",
			"phase": 4,
			"region": 11
		},
		{
			"name": "Laguna Blanca",
			"phase": 4,
			"region": 12
		},
		{
			"name": "Laja",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Lampa",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Lanco",
			"phase": 3,
			"region": 14
		},
		{
			"name": "Las Cabras",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Las Condes",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Lautaro",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Lebu",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Licantén",
			"phase": 2,
			"region": 7
		},
		{
			"name": "Limache",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Linares",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Litueche",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Llanquihue",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Llay-Llay",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Lo Barnechea",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Lo Espejo",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Lo Prado",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Lolol",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Loncoche",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Longaví",
			"phase": 3,
			"region": 7
		},
		{
			"name": "Lonquimay",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Los Andes",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Los Lagos",
			"phase": 3,
			"region": 14
		},
		{
			"name": "Los Muermos",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Los Sauces",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Los Vilos",
			"phase": 4,
			"region": 4
		},
		{
			"name": "Los Álamos",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Los Ángeles",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Lota",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Lumaco",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Machalí",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Macul",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Maipú",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Malloa",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Marchihue",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Mariquina",
			"phase": 4,
			"region": 14
		},
		{
			"name": "María Elena",
			"phase": 4,
			"region": 2
		},
		{
			"name": "María Pinto",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Maule",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Maullín",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Mejillones",
			"phase": 4,
			"region": 2
		},
		{
			"name": "Melipeuco",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Melipilla",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Molina",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Monte Patria",
			"phase": 4,
			"region": 4
		},
		{
			"name": "Mostazal",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Mulchén",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Máfil",
			"phase": 4,
			"region": 14
		},
		{
			"name": "Nacimiento",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Nancagua",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Natales",
			"phase": 4,
			"region": 12
		},
		{
			"name": "Navidad",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Negrete",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Ninhue",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Nogales",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Nueva Imperial",
			"phase": 4,
			"region": 9
		},
		{
			"name": "O'Higgins",
			"phase": 4,
			"region": 11
		},
		{
			"name": "Olivar",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Ollagüe",
			"phase": 4,
			"region": 2
		},
		{
			"name": "Olmué",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Osorno",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Ovalle",
			"phase": 4,
			"region": 4
		},
		{
			"name": "Padre Hurtado",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Padre Las Casas",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Paihuano",
			"phase": 4,
			"region": 4
		},
		{
			"name": "Paillaco",
			"phase": 3,
			"region": 14
		},
		{
			"name": "Paine",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Palena",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Palmilla",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Panguipulli",
			"phase": 2,
			"region": 14
		},
		{
			"name": "Panquehue",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Papudo",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Paredones",
			"phase": 3,
			"region": 6
		},
		{
			"name": "Parral",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Pedro Aguirre Cerda",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Pelarco",
			"phase": 2,
			"region": 7
		},
		{
			"name": "Pelluhue",
			"phase": 3,
			"region": 7
		},
		{
			"name": "Pemuco",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Pencahue",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Penco",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Peralillo",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Perquenco",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Petorca",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Peumo",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Peñaflor",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Peñalolén",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Pica",
			"phase": 4,
			"region": 1
		},
		{
			"name": "Pichidegua",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Pichilemu",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Pinto",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Pirque",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Pitrufquén",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Placilla",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Portezuelo",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Porvenir",
			"phase": 4,
			"region": 12
		},
		{
			"name": "Pozo Almonte",
			"phase": 3,
			"region": 1
		},
		{
			"name": "Primavera",
			"phase": 4,
			"region": 12
		},
		{
			"name": "Providencia",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Puchuncaví",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Pucón",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Pudahuel",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Puente Alto",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Puerto Montt",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Puerto Octay",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Puerto Varas",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Pumanque",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Punitaqui",
			"phase": 4,
			"region": 4
		},
		{
			"name": "Punta Arenas",
			"phase": 4,
			"region": 12
		},
		{
			"name": "Puqueldón",
			"phase": 2,
			"region": 10
		},
		{
			"name": "Purranque",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Purén",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Putaendo",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Putre",
			"phase": 4,
			"region": 15
		},
		{
			"name": "Puyehue",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Queilén",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Quellón",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Quemchi",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Quilaco",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Quilicura",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Quilleco",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Quillota",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Quillón",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Quilpué",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Quinchao",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Quinta Normal",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Quinta de Tilcoco",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Quintero",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Quirihue",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Rancagua",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Rauco",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Recoleta",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Renaico",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Renca",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Rengo",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Requínoa",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Retiro",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Rinconada",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Romeral",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Ránquil",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Río Bueno",
			"phase": 4,
			"region": 14
		},
		{
			"name": "Río Claro",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Río Hurtado",
			"phase": 4,
			"region": 4
		},
		{
			"name": "Río Ibáñez",
			"phase": 4,
			"region": 11
		},
		{
			"name": "Río Negro",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Río Verde",
			"phase": 4,
			"region": 12
		},
		{
			"name": "Saavedra",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Sagrada Familia",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Salamanca",
			"phase": 4,
			"region": 4
		},
		{
			"name": "San Antonio",
			"phase": 3,
			"region": 5
		},
		{
			"name": "San Bernardo",
			"phase": 3,
			"region": 13
		},
		{
			"name": "San Carlos",
			"phase": 4,
			"region": 16
		},
		{
			"name": "San Clemente",
			"phase": 4,
			"region": 7
		},
		{
			"name": "San Esteban",
			"phase": 4,
			"region": 5
		},
		{
			"name": "San Fabián",
			"phase": 4,
			"region": 16
		},
		{
			"name": "San Felipe",
			"phase": 4,
			"region": 5
		},
		{
			"name": "San Fernando",
			"phase": 4,
			"region": 6
		},
		{
			"name": "San Gregorio",
			"phase": 4,
			"region": 12
		},
		{
			"name": "San Ignacio",
			"phase": 4,
			"region": 16
		},
		{
			"name": "San Javier",
			"phase": 4,
			"region": 7
		},
		{
			"name": "San Joaquín",
			"phase": 3,
			"region": 13
		},
		{
			"name": "San José de Maipo",
			"phase": 3,
			"region": 13
		},
		{
			"name": "San Juan de la Costa",
			"phase": 4,
			"region": 10
		},
		{
			"name": "San Miguel",
			"phase": 3,
			"region": 13
		},
		{
			"name": "San Nicolás",
			"phase": 4,
			"region": 16
		},
		{
			"name": "San Pablo",
			"phase": 4,
			"region": 10
		},
		{
			"name": "San Pedro",
			"phase": 4,
			"region": 13
		},
		{
			"name": "San Pedro de Atacama",
			"phase": 3,
			"region": 2
		},
		{
			"name": "San Pedro de la Paz",
			"phase": 4,
			"region": 8
		},
		{
			"name": "San Rafael",
			"phase": 4,
			"region": 7
		},
		{
			"name": "San Ramón",
			"phase": 3,
			"region": 13
		},
		{
			"name": "San Rosendo",
			"phase": 4,
			"region": 8
		},
		{
			"name": "San Vicente",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Santa Bárbara",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Santa Cruz",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Santa Juana",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Santa Maria",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Santiago",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Santo Domingo",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Sierra Gorda",
			"phase": 4,
			"region": 2
		},
		{
			"name": "Talagante",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Talca",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Talcahuano",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Taltal",
			"phase": 4,
			"region": 2
		},
		{
			"name": "Temuco",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Teno",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Teodoro Schmidt",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Tierra Amarilla",
			"phase": 4,
			"region": 3
		},
		{
			"name": "Til Til",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Timaukel",
			"phase": 4,
			"region": 12
		},
		{
			"name": "Tirúa",
			"phase": 2,
			"region": 8
		},
		{
			"name": "Tocopilla",
			"phase": 4,
			"region": 2
		},
		{
			"name": "Toltén",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Tomé",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Torres del Paine",
			"phase": 4,
			"region": 12
		},
		{
			"name": "Tortel",
			"phase": 4,
			"region": 11
		},
		{
			"name": "Traiguén",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Trehuaco",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Tucapel",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Valdivia",
			"phase": 3,
			"region": 14
		},
		{
			"name": "Vallenar",
			"phase": 4,
			"region": 3
		},
		{
			"name": "Valparaiso",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Vichuquén",
			"phase": 2,
			"region": 7
		},
		{
			"name": "Victoria",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Vicuña",
			"phase": 4,
			"region": 4
		},
		{
			"name": "Vilcún",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Villa Alegre",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Villa Alemana",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Villarrica",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Vitacura",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Viña del Mar",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Yerbas Buenas",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Yumbel",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Yungay",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Zapallar",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Ñiquén",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Ñuñoa",
			"phase": 3,
			"region": 13
		}
	]
};

export const phaseNames = new Map<number, string>([
	[1, "cuarentena"],
	[2, "transición"],
	[3, "preparación"],
	[4, "apertura"]
]);

export const VACCINE_SINOVAC = 'Sinovac';
export const VACCINE_PFIZER = 'Pfizer';
export const VACCINE_ASTRAZENECA = 'AstraZeneca';
export const VACCINE_CANSINO = 'CanSino';

export const vaccineKinds = [
	VACCINE_SINOVAC,
	VACCINE_PFIZER,
	VACCINE_ASTRAZENECA,
	VACCINE_CANSINO
];

export const vaccinationSchedule: VaccinationDate[] = [
	// Miércoles 18 de agosto
	{
		name: 'Dosis de refuerzo para personas entre 70 y 71 años',
		date: '2021-08-18',
		dose: 3,
		minAge: 70,
		maxAge: 71,
		kind: 'Sinovac',
		previousDoseMinDate: '2021-03-01',
		previousDoseMaxDate: '2021-03-14'
	},
	{
		name: 'Segunda dosis a población vacunada con Pfizer entre el 5 y el 18 de julio',
		date: '2021-08-18',
		dose: 2,
		kind: 'Pfizer',
		previousDoseMinDate: '2021-07-05',
		previousDoseMaxDate: '2021-07-18'
	},
	// Jueves 19 de agosto
	{
		name: 'Dosis de refuerzo para personas entre 64 y 69 años',
		date: '2021-08-19',
		dose: 3,
		minAge: 64,
		maxAge: 69,
		kind: 'Sinovac',
		previousDoseMinDate: '2021-03-01',
		previousDoseMaxDate: '2021-03-14'
	},
	{
		name: 'Segunda dosis a población vacunada con Pfizer entre el 5 y el 18 de julio',
		date: '2021-08-19',
		dose: 2,
		kind: 'Pfizer',
		previousDoseMinDate: '2021-07-05',
		previousDoseMaxDate: '2021-07-18'
	},
	// Viernes 20 de agosto
	{
		name: 'Dosis de refuerzo para personas entre 55 y 63 años',
		date: '2021-08-20',
		dose: 3,
		minAge: 55,
		maxAge: 63,
		kind: 'Sinovac',
		previousDoseMinDate: '2021-03-01',
		previousDoseMaxDate: '2021-03-14'
	},
	{
		name: 'Segunda dosis a población vacunada con Pfizer entre el 5 y el 18 de julio',
		date: '2021-08-20',
		dose: 2,
		kind: 'Pfizer',
		previousDoseMinDate: '2021-07-05',
		previousDoseMaxDate: '2021-07-18'
	},
	// Lunes 23 de agosto
	{
		name: 'Dosis de refuerzo para personas vacunadas con segunda dosis Sinovac hasta el 4 de abril',
		date: '2021-08-23',
		dose: 3,
		minAge: 78,
		kind: 'Sinovac'
	},
	{
		name: 'Primera dosis rezagados desde los 18 años con Sinovac, CanSino o AstraZeneca',
		date: '2021-08-23',
		dose: 1,
		minAge: 18
	},
	{
		name: 'Segunda dosis a población vacunada con Sinovac',
		date: '2021-08-23',
		dose: 2,
		kind: 'Sinovac',
		daysAfterPreviousDose: 28
	},
	{
		name: 'Segunda dosis a población vacunada con AstraZeneca',
		date: '2021-08-23',
		dose: 2,
		kind: 'AstraZeneca',
		daysAfterPreviousDose: 28
	},
	// Martes 24 de agosto
	{
		name: 'Dosis de refuerzo para personas vacunadas con segunda dosis Sinovac hasta el 4 de abril',
		date: '2021-08-24',
		dose: 3,
		minAge: 72,
		maxAge: 77,
		kind: 'Sinovac',
		previousDoseMaxDate: '2021-04-04'
	},
	{
		name: 'Primera dosis rezagados desde los 18 años con Sinovac, CanSino o AstraZeneca',
		date: '2021-08-24',
		dose: 1,
		minAge: 18
	},
	{
		name: 'Segunda dosis a población vacunada con Sinovac',
		date: '2021-08-24',
		dose: 2,
		kind: 'Sinovac',
		daysAfterPreviousDose: 28
	},
	{
		name: 'Segunda dosis a población vacunada con AstraZeneca',
		date: '2021-08-24',
		dose: 2,
		kind: 'AstraZeneca',
		daysAfterPreviousDose: 28
	},
	// Miércoles 25 de agosto
	{
		name: 'Dosis de refuerzo para personas vacunadas con segunda dosis Sinovac hasta el 4 de abril',
		date: '2021-08-25',
		dose: 3,
		minAge: 70,
		maxAge: 71,
		kind: 'Sinovac',
		previousDoseMaxDate: '2021-04-04'
	},
	{
		name: 'Primera dosis rezagados desde los 18 años con Sinovac, CanSino o AstraZeneca',
		date: '2021-08-25',
		dose: 1,
		minAge: 18
	},
	{
		name: 'Segunda dosis a población vacunada con Sinovac',
		date: '2021-08-25',
		dose: 2,
		kind: 'Sinovac',
		daysAfterPreviousDose: 28
	},
	{
		name: 'Segunda dosis a población vacunada con AstraZeneca',
		date: '2021-08-25',
		dose: 2,
		kind: 'AstraZeneca',
		daysAfterPreviousDose: 28
	},
	// Jueves 26 de agosto
	{
		name: 'Dosis de refuerzo para personas vacunadas con segunda dosis Sinovac hasta el 4 de abril',
		date: '2021-08-26',
		dose: 3,
		minAge: 68,
		maxAge: 69,
		kind: 'Sinovac',
		previousDoseMaxDate: '2021-04-04'
	},
	{
		name: 'Segunda dosis Pfizer a población vacunada con Pfizer entre el 12 y el 25 de julio',
		date: '2021-08-26',
		dose: 2,
		kind: 'Pfizer',
		previousDoseMinDate: '2021-07-12',
		previousDoseMaxDate: '2021-07-25'
	},
	// Viernes 27 de agosto
	{
		name: 'Dosis de refuerzo para personas vacunadas con segunda dosis Sinovac hasta el 4 de abril',
		date: '2021-08-27',
		dose: 3,
		minAge: 67,
		maxAge: 68,
		kind: 'Sinovac',
		previousDoseMaxDate: '2021-04-04'
	},
	{
		name: 'Segunda dosis Pfizer a población vacunada con Pfizer entre el 12 y el 25 de julio',
		date: '2021-08-27',
		dose: 2,
		kind: 'Pfizer',
		previousDoseMinDate: '2021-07-12',
		previousDoseMaxDate: '2021-07-25'
	},
	// Lunes 30 de agosto
	{
		name: 'Dosis de refuerzo para personas vacunadas con segunda dosis Sinovac hasta el 4 de abril',
		date: '2021-08-30',
		dose: 3,
		minAge: 66,
		kind: 'Sinovac'
	},
	// Martes 31 de agosto
	{
		name: 'Dosis de refuerzo para personas vacunadas con segunda dosis Sinovac hasta el 4 de abril',
		date: '2021-08-31',
		dose: 3,
		minAge: 65,
		maxAge: 65,
		kind: 'Sinovac',
		previousDoseMaxDate: '2021-04-04'
	},
	// Miércoles 1 de septiembre
	{
		name: 'Dosis de refuerzo para personas vacunadas con segunda dosis Sinovac hasta el 4 de abril',
		date: '2021-09-01',
		dose: 3,
		minAge: 63,
		maxAge: 64,
		kind: 'Sinovac',
		previousDoseMaxDate: '2021-04-04'
	},
	// Jueves 2 de septiembre
	{
		name: 'Dosis de refuerzo para personas vacunadas con segunda dosis Sinovac hasta el 4 de abril',
		date: '2021-09-02',
		dose: 3,
		minAge: 61,
		maxAge: 62,
		kind: 'Sinovac',
		previousDoseMaxDate: '2021-04-04'
	},
	// Viernes 3 de septiembre
	{
		name: 'Dosis de refuerzo para personas vacunadas con segunda dosis Sinovac hasta el 4 de abril',
		date: '2021-09-03',
		dose: 3,
		minAge: 55,
		maxAge: 60,
		kind: 'Sinovac',
		previousDoseMaxDate: '2021-04-04'
	},
];

export const localesVotacion: LocalVotacion[] = [
	{
		"comuna": "ALTO HOSPICIO",
		"circunscripcion": "ALTO HOSPICIO",
		"direccion": "AVENIDA LOS ALAMOS N° 3161"
	},
	{
		"comuna": "CAMIÑA",
		"circunscripcion": "CAMIÑA",
		"direccion": "ELEUTERIO RAMIREZ SN"
	},
	{
		"comuna": "COLCHANE",
		"circunscripcion": "COLCHANE",
		"direccion": "AVENIDA TENIENTE GONZALES S/N"
	},
	{
		"comuna": "HUARA",
		"circunscripcion": "CHIAPA",
		"direccion": "SOTOMAYOR N° 40, HUARA"
	},
	{
		"comuna": "HUARA",
		"circunscripcion": "HUARA",
		"direccion": "SOTOMAYOR N° 40, HUARA"
	},
	{
		"comuna": "HUARA",
		"circunscripcion": "PISAGUA",
		"direccion": "SOTOMAYOR N° 40, HUARA"
	},
	{
		"comuna": "HUARA",
		"circunscripcion": "SAN LORENZO DE TARAPACA",
		"direccion": "SOTOMAYOR N° 40, HUARA"
	},
	{
		"comuna": "IQUIQUE",
		"circunscripcion": "CHANAVAYITA",
		"direccion": "PEDRO GAMBONI N° 2874"
	},
	{
		"comuna": "IQUIQUE",
		"circunscripcion": "IQUIQUE",
		"direccion": "PEDRO GAMBONI N° 2874"
	},
	{
		"comuna": "IQUIQUE",
		"circunscripcion": "IQUIQUE SUR",
		"direccion": "PEDRO GAMBONI N° 2874"
	},
	{
		"comuna": "PICA",
		"circunscripcion": "PICA",
		"direccion": "BLANCO ENCALADA N° 103, (ESQUINA MAIPÚ)"
	},
	{
		"comuna": "POZO ALMONTE",
		"circunscripcion": "LA TIRANA",
		"direccion": "ALGARROBO S/N"
	},
	{
		"comuna": "POZO ALMONTE",
		"circunscripcion": "MAMIÑA",
		"direccion": "AVENIDA ESPAÑA N° 698"
	},
	{
		"comuna": "POZO ALMONTE",
		"circunscripcion": "POZO ALMONTE",
		"direccion": "BALMACEDA N° 168"
	},
	{
		"comuna": "ANTOFAGASTA",
		"circunscripcion": "ANTOFAGASTA NORTE",
		"direccion": "MANUEL ANTONIO MATTA 2176"
	},
	{
		"comuna": "ANTOFAGASTA",
		"circunscripcion": "ANTOFAGASTA SUR",
		"direccion": "MANUEL ANTONIO MATTA 2176"
	},
	{
		"comuna": "CALAMA",
		"circunscripcion": "CALAMA",
		"direccion": "VIVAR 2137"
	},
	{
		"comuna": "CALAMA",
		"circunscripcion": "CHIU CHIU",
		"direccion": "VIVAR 2137 (CALAMA)"
	},
	{
		"comuna": "CALAMA",
		"circunscripcion": "CHUQUICAMATA",
		"direccion": "VIVAR 2137 (CALAMA)"
	},
	{
		"comuna": "MARIA ELENA",
		"circunscripcion": "MARIA ELENA",
		"direccion": "IGNACIO CARRERA PINTO S/N"
	},
	{
		"comuna": "MARIA ELENA",
		"circunscripcion": "PEDRO DE VALDIVIA",
		"direccion": "IGNACIO CARRERA PINTO S/N (MARIA ELENA)"
	},
	{
		"comuna": "MARIA ELENA",
		"circunscripcion": "QUILLAGUA",
		"direccion": "IGNACIO CARRERA PINTO S/N (MARIA ELENA)"
	},
	{
		"comuna": "MEJILLONES",
		"circunscripcion": "MEJILLONES",
		"direccion": "AV. LATORRE 898"
	},
	{
		"comuna": "OLLAGUE",
		"circunscripcion": "OLLAGUE",
		"direccion": "VIVAR 237 (CALAMA)"
	},
	{
		"comuna": "SAN PEDRO DE ATACAMA",
		"circunscripcion": "SAN PEDRO DE ATACAMA",
		"direccion": "IGNACIO CARRERA PINTO 500"
	},
	{
		"comuna": "SIERRA GORDA",
		"circunscripcion": "SIERRA GORDA",
		"direccion": "MANUEL ANTONIO MATTA 2176 (ANTOFAGASTA)"
	},
	{
		"comuna": "SIERRA GORDA",
		"circunscripcion": "SIERRA GORDA NORTE",
		"direccion": "MANUEL ANTONIO MATTA 2176 (ANTOFAGASTA)"
	},
	{
		"comuna": "TALTAL",
		"circunscripcion": "TALTAL",
		"direccion": "RIQUELME 837"
	},
	{
		"comuna": "TOCOPILLA",
		"circunscripcion": "TOCOPILLA",
		"direccion": "ANIBAL PINTO 1385 (FRENTE PLAZA CONDELL)"
	},
	{
		"comuna": "ALTO DEL CARMEN",
		"circunscripcion": "ALTO DEL CARMEN",
		"direccion": "EXPLANADA CENTRO COMUNITARIO"
	},
	{
		"comuna": "ALTO DEL CARMEN",
		"circunscripcion": "EL TRANSITO",
		"direccion": "PLAZA PRINCIPAL"
	},
	{
		"comuna": "ALTO DEL CARMEN",
		"circunscripcion": "SAN FELIX",
		"direccion": "PLAZA PRINCIPAL"
	},
	{
		"comuna": "CALDERA",
		"circunscripcion": "CALDERA",
		"direccion": "CALLE LA PIÑA #800 – SECTOR VILLA LAS PLAYAS"
	},
	{
		"comuna": "CHAÑARAL",
		"circunscripcion": "CHAÑARAL",
		"direccion": "O’HIGGINS CON LATORRE SECTOR AMPLIACION (NO CONFIRMADO)"
	},
	{
		"comuna": "COPIAPO",
		"circunscripcion": "COPIAPO",
		"direccion": "COPAYAPU ESQUINA HENRIQUEZ"
	},
	{
		"comuna": "COPIAPO",
		"circunscripcion": "LOS VOLCANES",
		"direccion": "COPAYAPU ESQUINA HENRIQUEZ"
	},
	{
		"comuna": "COPIAPO",
		"circunscripcion": "PAIPOTE",
		"direccion": "PAIPOTE"
	},
	{
		"comuna": "COPIAPO",
		"circunscripcion": "PALOMAR",
		"direccion": "COPAYAPU ESQUINA HENRIQUEZ"
	},
	{
		"comuna": "DIEGO DE ALMAGRO",
		"circunscripcion": "DIEGO DE ALMAGRO",
		"direccion": "AVDA BENITO TAPIA 101"
	},
	{
		"comuna": "DIEGO DE ALMAGRO",
		"circunscripcion": "EL SALVADOR",
		"direccion": "SINDICATO Nº 6"
	},
	{
		"comuna": "FREIRINA",
		"circunscripcion": "FREIRINA",
		"direccion": "PLAZA DE ARMAS"
	},
	{
		"comuna": "HUASCO",
		"circunscripcion": "HUASCO",
		"direccion": "PLAZA DE ARMAS"
	},
	{
		"comuna": "TIERRA AMARILLA",
		"circunscripcion": "LOS LOROS",
		"direccion": "ESCUELA FRONTERIZA"
	},
	{
		"comuna": "TIERRA AMARILLA",
		"circunscripcion": "TIERRA AMARILLA",
		"direccion": "MIGUEL LEMEUR 471"
	},
	{
		"comuna": "VALLENAR",
		"circunscripcion": "DOMEYKO",
		"direccion": "CENTRO COMUNITARIO"
	},
	{
		"comuna": "VALLENAR",
		"circunscripcion": "VALLENAR",
		"direccion": "PLAZA SAN AMBROSIO"
	},
	{
		"comuna": "ANDACOLLO",
		"circunscripcion": "ANDACOLLO",
		"direccion": "URMENETA 599"
	},
	{
		"comuna": "CANELA",
		"circunscripcion": "CANELA (CANELA BAJA)",
		"direccion": "ANTONIO CUEVAS 225"
	},
	{
		"comuna": "CANELA",
		"circunscripcion": "MINCHA",
		"direccion": "JUAN XXVIII S/N MINCHA NORTE"
	},
	{
		"comuna": "COMBARBALA",
		"circunscripcion": "COMBARBALA",
		"direccion": "AVENIDA ORIENTE 747"
	},
	{
		"comuna": "COQUIMBO",
		"circunscripcion": "COQUIMBO",
		"direccion": "SANTIAGO TRIGO 520"
	},
	{
		"comuna": "COQUIMBO",
		"circunscripcion": "TIERRAS BLANCAS",
		"direccion": "TALCA 1145"
	},
	{
		"comuna": "COQUIMBO",
		"circunscripcion": "TONGOY",
		"direccion": "AVENIDA GUANAQUEROS S/N TONGOY"
	},
	{
		"comuna": "ILLAPEL",
		"circunscripcion": "ILLAPEL",
		"direccion": "O’HIGGINS 322"
	},
	{
		"comuna": "LA HIGUERA",
		"circunscripcion": "LA HIGUERA",
		"direccion": "GABRIELA MISTRAL 84"
	},
	{
		"comuna": "LA SERENA",
		"circunscripcion": "LA SERENA",
		"direccion": "JUAN DE DIOS PENI 180"
	},
	{
		"comuna": "LA SERENA",
		"circunscripcion": "LAS COMPAÑIAS",
		"direccion": "ENRIQUE CAMPINO 2800"
	},
	{
		"comuna": "LOS VILOS",
		"circunscripcion": "CAIMANES",
		"direccion": "18 DE SEPTIEMBRE S/N"
	},
	{
		"comuna": "LOS VILOS",
		"circunscripcion": "LOS VILOS",
		"direccion": "ELICURA 356"
	},
	{
		"comuna": "LOS VILOS",
		"circunscripcion": "QUILIMARI",
		"direccion": "ESMERALDA 61"
	},
	{
		"comuna": "MONTE PATRIA",
		"circunscripcion": "CAREN",
		"direccion": "MAC IVER 375"
	},
	{
		"comuna": "MONTE PATRIA",
		"circunscripcion": "CHAÑARAL ALTO",
		"direccion": "LOS LIBERTADORES S/N"
	},
	{
		"comuna": "MONTE PATRIA",
		"circunscripcion": "EL PALQUI",
		"direccion": "AVENIDA EL PALQUI 41"
	},
	{
		"comuna": "MONTE PATRIA",
		"circunscripcion": "MONTE PATRIA",
		"direccion": "PLAZA DE ARMAS 40"
	},
	{
		"comuna": "MONTE PATRIA",
		"circunscripcion": "RAPEL",
		"direccion": "CALLE UNICA S/N"
	},
	{
		"comuna": "OVALLE",
		"circunscripcion": "BARRAZA",
		"direccion": "FEDERICO ALONSO S/N"
	},
	{
		"comuna": "OVALLE",
		"circunscripcion": "CERRILLOS DE TAMAYA",
		"direccion": "TEODOSIO CUADROS ESQ/SAN ANTONIO"
	},
	{
		"comuna": "OVALLE",
		"circunscripcion": "OVALLE",
		"direccion": "LA CHIMBA 522"
	},
	{
		"comuna": "PAIHUANO",
		"circunscripcion": "PAIHUANO",
		"direccion": "BALMACEDA 132"
	},
	{
		"comuna": "PUNITAQUI",
		"circunscripcion": "PUNITAQUI",
		"direccion": "LAUTARO 1396"
	},
	{
		"comuna": "RIO HURTADO",
		"circunscripcion": "HURTADO",
		"direccion": "CALLE UNICA S/N"
	},
	{
		"comuna": "RIO HURTADO",
		"circunscripcion": "RIO HURTADO (SAMO ALTO)",
		"direccion": "CALLE UNICA S/N"
	},
	{
		"comuna": "SALAMANCA",
		"circunscripcion": "CHELLEPIN",
		"direccion": "MARQUÉZ DE MONTEPIO 241"
	},
	{
		"comuna": "SALAMANCA",
		"circunscripcion": "SALAMANCA",
		"direccion": "MARQUÉZ DE MONTEPIO 241"
	},
	{
		"comuna": "VICUÑA",
		"circunscripcion": "VICUÑA",
		"direccion": "GABRIELA MISTRAL 617"
	},
	{
		"comuna": "ALGARROBO",
		"circunscripcion": "ALGARROBO",
		"direccion": "ALCALDE RAÚL ROMERO ERAZO 0387 (EL QUISCO)"
	},
	{
		"comuna": "CABILDO",
		"circunscripcion": "CABILDO",
		"direccion": "ZOILA GAC S/N"
	},
	{
		"comuna": "CALERA",
		"circunscripcion": "CALERA",
		"direccion": "CAUPOLICAN SIN NUMERO, ESQUINA PEDRO DE VALDIVIA"
	},
	{
		"comuna": "CALLE LARGA",
		"circunscripcion": "CALLE LARGA",
		"direccion": "LA PAMPILLA 350"
	},
	{
		"comuna": "CARTAGENA",
		"circunscripcion": "CARTAGENA",
		"direccion": "MARIANO CASANOVA 660, CARTAGENA (INGRESO POR CALLE ANTOFAGASTA)"
	},
	{
		"comuna": "CASABLANCA",
		"circunscripcion": "CASABLANCA",
		"direccion": "AV. PUNTA ARENAS 165"
	},
	{
		"comuna": "CATEMU",
		"circunscripcion": "CATEMU",
		"direccion": "BORJA GARCIA HUIDOBRO SIN NUMERO, LADO PLAZA"
	},
	{
		"comuna": "CONCON",
		"circunscripcion": "CONCON",
		"direccion": "PORVENIR 865"
	},
	{
		"comuna": "EL QUISCO",
		"circunscripcion": "EL QUISCO",
		"direccion": "ALCALDE RAÚL ROMERO ERAZO 0387"
	},
	{
		"comuna": "EL TABO",
		"circunscripcion": "EL TABO",
		"direccion": "AVENIDA JOSEFINA 248"
	},
	{
		"comuna": "HIJUELAS",
		"circunscripcion": "HIJUELAS",
		"direccion": "MANUEL RODRIGUEZ 1746"
	},
	{
		"comuna": "ISLA DE PASCUA",
		"circunscripcion": "ISLA DE PASCUA",
		"direccion": "TE PITO O TE HENUA S/N"
	},
	{
		"comuna": "JUAN FERNANDEZ",
		"circunscripcion": "JUAN FERNANDEZ",
		"direccion": "CALLE BLANCO 1421 (VALPARAISO)"
	},
	{
		"comuna": "LA CRUZ",
		"circunscripcion": "LA CRUZ",
		"direccion": "SIMPSON 18"
	},
	{
		"comuna": "LA LIGUA",
		"circunscripcion": "LA LIGUA",
		"direccion": "SERRANO 51"
	},
	{
		"comuna": "LA LIGUA",
		"circunscripcion": "PICHICUY",
		"direccion": "SERRANO 51"
	},
	{
		"comuna": "LA LIGUA",
		"circunscripcion": "PLAYA LOS MOLLES",
		"direccion": "SERRANO 51"
	},
	{
		"comuna": "LIMACHE",
		"circunscripcion": "LIMACHE",
		"direccion": "AV. URMENETA 599"
	},
	{
		"comuna": "LLAILLAY",
		"circunscripcion": "LLAY-LLAY",
		"direccion": "CALLE EDWARDS 501"
	},
	{
		"comuna": "LOS ANDES",
		"circunscripcion": "ALTO ACONCAGUA",
		"direccion": "AVENIDA INDEPENDENCIA 255"
	},
	{
		"comuna": "LOS ANDES",
		"circunscripcion": "LOS ANDES",
		"direccion": "AVENIDA INDEPENDENCIA 255"
	},
	{
		"comuna": "NOGALES",
		"circunscripcion": "EL MELON",
		"direccion": "RAMON FREIRE 1"
	},
	{
		"comuna": "NOGALES",
		"circunscripcion": "NOGALES",
		"direccion": "LAUTARO 90"
	},
	{
		"comuna": "OLMUE",
		"circunscripcion": "OLMUE",
		"direccion": "BLANCO ENCALADA 4631"
	},
	{
		"comuna": "PANQUEHUE",
		"circunscripcion": "PANQUEHUE",
		"direccion": "TRONCAL 1166"
	},
	{
		"comuna": "PAPUDO",
		"circunscripcion": "PAPUDO",
		"direccion": "AVENIDA LAS SALINAS ESQ 4 ORIENTE"
	},
	{
		"comuna": "PAPUDO",
		"circunscripcion": "PULLALLY",
		"direccion": "AVENIDA LAS SALINAS ESQ 4 ORIENTE"
	},
	{
		"comuna": "PETORCA",
		"circunscripcion": "CHINCOLCO",
		"direccion": "PEDRO MONTT S/N, CHINCOLCO"
	},
	{
		"comuna": "PETORCA",
		"circunscripcion": "PETORCA",
		"direccion": "CALLE CUARTEL 145"
	},
	{
		"comuna": "PUCHUNCAVI",
		"circunscripcion": "PUCHUNCAVI",
		"direccion": "LOS ALERCES S/N LA GREDA"
	},
	{
		"comuna": "PUCHUNCAVI",
		"circunscripcion": "VENTANAS",
		"direccion": "LOS ALERCES S/N LA GREDA"
	},
	{
		"comuna": "PUTAENDO",
		"circunscripcion": "PUTAENDO",
		"direccion": "COMERCIO 100"
	},
	{
		"comuna": "QUILLOTA",
		"circunscripcion": "QUILLOTA",
		"direccion": "LA CONCEPCION 221, ESQUINA FREIRE"
	},
	{
		"comuna": "QUILLOTA",
		"circunscripcion": "SAN PEDRO DE QUILLOTA",
		"direccion": "CINTURA SAN PEDRO 223"
	},
	{
		"comuna": "QUILPUE",
		"circunscripcion": "EL BELLOTO",
		"direccion": "IRARRAZABAL 446"
	},
	{
		"comuna": "QUILPUE",
		"circunscripcion": "LOS MOLLES",
		"direccion": "IRARRAZABAL 446"
	},
	{
		"comuna": "QUILPUE",
		"circunscripcion": "QUILPUE",
		"direccion": "IRARRAZABAL 446"
	},
	{
		"comuna": "QUINTERO",
		"circunscripcion": "QUINTERO",
		"direccion": "AV. NORMANDIE 2298"
	},
	{
		"comuna": "RINCONADA",
		"circunscripcion": "RINCONADA",
		"direccion": "PERFECTO DE LA FUENTE 84"
	},
	{
		"comuna": "SAN ANTONIO",
		"circunscripcion": "CUNCUMEN",
		"direccion": "BARROS LUCO 1945"
	},
	{
		"comuna": "SAN ANTONIO",
		"circunscripcion": "SAN ANTONIO",
		"direccion": "BARROS LUCO 1945"
	},
	{
		"comuna": "SAN ESTEBAN",
		"circunscripcion": "RIO COLORADO",
		"direccion": "LAS ACACIAS 533"
	},
	{
		"comuna": "SAN ESTEBAN",
		"circunscripcion": "SAN ESTEBAN",
		"direccion": "LAS ACACIAS 533"
	},
	{
		"comuna": "SAN FELIPE",
		"circunscripcion": "SAN FELIPE",
		"direccion": "BERNARDO CRUZ 1213"
	},
	{
		"comuna": "SANTA MARIA",
		"circunscripcion": "SANTA MARIA",
		"direccion": "CALLE JAHUEL 729"
	},
	{
		"comuna": "SANTO DOMINGO",
		"circunscripcion": "SANTO DOMINGO",
		"direccion": "AV. SANTA TERESA S/N"
	},
	{
		"comuna": "VALPARAISO",
		"circunscripcion": "BARON",
		"direccion": "AV. ARGENTINA 455"
	},
	{
		"comuna": "VALPARAISO",
		"circunscripcion": "EL PUERTO",
		"direccion": "CALLE BLANCO 1421"
	},
	{
		"comuna": "VALPARAISO",
		"circunscripcion": "LAGUNA VERDE",
		"direccion": "LOS AROMOS S/N"
	},
	{
		"comuna": "VALPARAISO",
		"circunscripcion": "PLACILLA DE PEÑUELAS",
		"direccion": "EL SAUCE 751"
	},
	{
		"comuna": "VALPARAISO",
		"circunscripcion": "PLAYA ANCHA",
		"direccion": "AVENIDA EL PARQUE 570, PLAYA ANCHA"
	},
	{
		"comuna": "VILLA ALEMANA",
		"circunscripcion": "VILLA ALEMANA",
		"direccion": "MADRID 717"
	},
	{
		"comuna": "VIÑA DEL MAR",
		"circunscripcion": "AGUA SANTA",
		"direccion": "MONTAÑA SIN NUMERO"
	},
	{
		"comuna": "VIÑA DEL MAR",
		"circunscripcion": "FORESTAL",
		"direccion": "MONTAÑA SIN NUMERO"
	},
	{
		"comuna": "VIÑA DEL MAR",
		"circunscripcion": "MIRAFLORES",
		"direccion": "AVENIDA FREI 4137, MIRAFLORES ALTO"
	},
	{
		"comuna": "VIÑA DEL MAR",
		"circunscripcion": "REÑACA BAJO",
		"direccion": "2 NORTE 753"
	},
	{
		"comuna": "VIÑA DEL MAR",
		"circunscripcion": "SAUSALITO",
		"direccion": "2 NORTE 753"
	},
	{
		"comuna": "ZAPALLAR",
		"circunscripcion": "CATAPILCO",
		"direccion": "CALLE SAN ALFONSO 260"
	},
	{
		"comuna": "ZAPALLAR",
		"circunscripcion": "ZAPALLAR",
		"direccion": "JANUARIO OVALLE 120"
	},
	{
		"comuna": "CHEPICA",
		"circunscripcion": "CHEPICA",
		"direccion": "BARTOLOME DEL REAL S/N CHEPICA"
	},
	{
		"comuna": "CHIMBARONGO",
		"circunscripcion": "CHIMBARONGO",
		"direccion": "CAMIRUAGA CORTINA 32"
	},
	{
		"comuna": "CODEGUA",
		"circunscripcion": "CODEGUA",
		"direccion": "OHIGGINS 349"
	},
	{
		"comuna": "COINCO",
		"circunscripcion": "COINCO",
		"direccion": "FRANCISCO DIAZ MUÑOZ S/N"
	},
	{
		"comuna": "COLTAUCO",
		"circunscripcion": "COLTAUCO",
		"direccion": "REPUBLICA DE CHILE 233"
	},
	{
		"comuna": "DOÑIHUE",
		"circunscripcion": "DOÑIHUE",
		"direccion": "ERRAZURIZ ESQUINA DOCTOR SANHUEZA"
	},
	{
		"comuna": "DOÑIHUE",
		"circunscripcion": "LO MIRANDA",
		"direccion": "AV PEDRO AGUIRRE CERDA 035 LO MIRANDA"
	},
	{
		"comuna": "GRANEROS",
		"circunscripcion": "GRANEROS",
		"direccion": "GUILLERMO BERRIOS 130"
	},
	{
		"comuna": "LA ESTRELLA",
		"circunscripcion": "LA ESTRELLA",
		"direccion": "ELEUTERIO RAMIREZ S/N"
	},
	{
		"comuna": "LAS CABRAS",
		"circunscripcion": "LAGO RAPEL (EL MANZANO)",
		"direccion": "KM 18 RUTA H-790 CAMINO EL ESTERO, EL MANZANO."
	},
	{
		"comuna": "LAS CABRAS",
		"circunscripcion": "LAS CABRAS",
		"direccion": "JHON KENNEDY 344"
	},
	{
		"comuna": "LITUECHE",
		"circunscripcion": "LITUECHE",
		"direccion": "AV CARDENAL CARO 796"
	},
	{
		"comuna": "LOLOL",
		"circunscripcion": "LOLOL",
		"direccion": "LOS AROMO S/N, FRENTE A LA MUNICIPALIDAD"
	},
	{
		"comuna": "MACHALI",
		"circunscripcion": "COYA",
		"direccion": "JHON KENNEDY 178 COYA"
	},
	{
		"comuna": "MACHALI",
		"circunscripcion": "MACHALI",
		"direccion": "CASTRO 300"
	},
	{
		"comuna": "MALLOA",
		"circunscripcion": "MALLOA",
		"direccion": "BERNARDO OHIGGINS 191"
	},
	{
		"comuna": "MALLOA",
		"circunscripcion": "PELEQUEN",
		"direccion": "SANTA ROSA S/N"
	},
	{
		"comuna": "MARCHIGUE",
		"circunscripcion": "MARCHIGUE",
		"direccion": "MARIA ERRAZURIZ 1079"
	},
	{
		"comuna": "MOSTAZAL",
		"circunscripcion": "LA PUNTA",
		"direccion": "JOSE TORIBIO MEDINA 149 LA PUNTA"
	},
	{
		"comuna": "MOSTAZAL",
		"circunscripcion": "MOSTAZAL",
		"direccion": "SAN GUILLERMO 570 MOSTAZAL"
	},
	{
		"comuna": "NANCAGUA",
		"circunscripcion": "NANCAGUA",
		"direccion": "ARMANDO JARAMILLO 598"
	},
	{
		"comuna": "NAVIDAD",
		"circunscripcion": "NAVIDAD",
		"direccion": "AVENIDA JUAN MONTES S/N"
	},
	{
		"comuna": "OLIVAR",
		"circunscripcion": "GULTRO",
		"direccion": "AVENIDA ESTADIO S/N"
	},
	{
		"comuna": "OLIVAR",
		"circunscripcion": "OLIVAR (ALTO)",
		"direccion": "AVENIDA ESTADIO S/N"
	},
	{
		"comuna": "PALMILLA",
		"circunscripcion": "PALMILLA",
		"direccion": "ANIBAL PINTO 39"
	},
	{
		"comuna": "PAREDONES",
		"circunscripcion": "BUCALEMU",
		"direccion": "CALLE DOCTOR MOORE N.76 PAREDONES"
	},
	{
		"comuna": "PAREDONES",
		"circunscripcion": "PAREDONES",
		"direccion": "CALLE DOCTOR MOORE N.76 PAREDONES"
	},
	{
		"comuna": "PAREDONES",
		"circunscripcion": "SAN PEDRO DE ALCANTARA",
		"direccion": "CALLE DOCTOR MOORE N.76 PAREDONES"
	},
	{
		"comuna": "PERALILLO",
		"circunscripcion": "PERALILLO",
		"direccion": "AVENIDA ERRAZURIZ 251"
	},
	{
		"comuna": "PEUMO",
		"circunscripcion": "PEUMO",
		"direccion": "CARMEN S/N"
	},
	{
		"comuna": "PICHIDEGUA",
		"circunscripcion": "PICHIDEGUA",
		"direccion": "INDEPENDENCIA S/N LADO HOGAR DE ANCIANOS"
	},
	{
		"comuna": "PICHILEMU",
		"circunscripcion": "PICHILEMU",
		"direccion": "JOSE JOAQUIN PEREZ 261"
	},
	{
		"comuna": "PLACILLA",
		"circunscripcion": "PLACILLA",
		"direccion": "MIRAFLORES #8"
	},
	{
		"comuna": "PUMANQUE",
		"circunscripcion": "PUMANQUE",
		"direccion": "ESCUELA PUMANQUE F-372"
	},
	{
		"comuna": "QUINTA DE TILCOCO",
		"circunscripcion": "QUINTA DE TILCOCO",
		"direccion": "JOSE BARRIENTOS SOTO 303"
	},
	{
		"comuna": "RANCAGUA",
		"circunscripcion": "RANCAGUA",
		"direccion": "ALMARZA 410"
	},
	{
		"comuna": "RANCAGUA",
		"circunscripcion": "RANCAGUA",
		"direccion": "PLAZA 475"
	},
	{
		"comuna": "RANCAGUA",
		"circunscripcion": "RANCAGUA ORIENTE",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "RENGO",
		"circunscripcion": "ESMERALDA",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "RENGO",
		"circunscripcion": "RENGO",
		"direccion": "ALONSO DE ERCILLA 51"
	},
	{
		"comuna": "RENGO",
		"circunscripcion": "ROSARIO",
		"direccion": "ALVARO PRIETO 245, ROSARIO"
	},
	{
		"comuna": "REQUINOA",
		"circunscripcion": "LOS LIRIOS",
		"direccion": "PLAZA DE ARMAS S/N"
	},
	{
		"comuna": "REQUINOA",
		"circunscripcion": "REQUINOA",
		"direccion": "CALLE PABLO RUBIO 395, REQUINOA"
	},
	{
		"comuna": "SAN FERNANDO",
		"circunscripcion": "PUENTE NEGRO",
		"direccion": "RUTA I-45 PUENTE NEGRO S/N"
	},
	{
		"comuna": "SAN FERNANDO",
		"circunscripcion": "SAN FERNANDO",
		"direccion": "ARGOMEDO 583"
	},
	{
		"comuna": "SAN FERNANDO",
		"circunscripcion": "SAN FERNANDO",
		"direccion": "ARGOMEDO 485"
	},
	{
		"comuna": "SAN VICENTE",
		"circunscripcion": "EL TAMBO",
		"direccion": "KM 10 CARRETERA EL TAMBO"
	},
	{
		"comuna": "SAN VICENTE",
		"circunscripcion": "SAN VICENTE",
		"direccion": "HORACIO ARANGUIZ 800"
	},
	{
		"comuna": "SAN VICENTE",
		"circunscripcion": "ZUÑIGA",
		"direccion": "CALLE UNICA 144"
	},
	{
		"comuna": "SANTA CRUZ",
		"circunscripcion": "SANTA CRUZ",
		"direccion": "AV DANIEL BARROS GREZ 86"
	},
	{
		"comuna": "CAUQUENES",
		"circunscripcion": "CAUQUENES",
		"direccion": "CATEDRAL N° 525"
	},
	{
		"comuna": "CAUQUENES",
		"circunscripcion": "POCILLAS",
		"direccion": "CATEDRAL N° 525"
	},
	{
		"comuna": "CAUQUENES",
		"circunscripcion": "SAUZAL",
		"direccion": "CATEDRAL N° 525"
	},
	{
		"comuna": "CHANCO",
		"circunscripcion": "CHANCO",
		"direccion": "CALLE YERBAS BUENAS S/N"
	},
	{
		"comuna": "COLBUN",
		"circunscripcion": "COLBUN",
		"direccion": "ESCUELA BASICA DE COLBUN"
	},
	{
		"comuna": "CONSTITUCION",
		"circunscripcion": "CONSTITUCION",
		"direccion": "LICEO DE CONSTITUCION"
	},
	{
		"comuna": "CONSTITUCION",
		"circunscripcion": "COSTA BLANCA",
		"direccion": "ESCUELA COSTA BLANCA"
	},
	{
		"comuna": "CONSTITUCION",
		"circunscripcion": "PUTU",
		"direccion": "LICEO DE PUTU"
	},
	{
		"comuna": "CONSTITUCION",
		"circunscripcion": "SANTA OLGA",
		"direccion": "LICEO ENRIQUE MAC IVER"
	},
	{
		"comuna": "CUREPTO",
		"circunscripcion": "CUREPTO",
		"direccion": "GIMNASIO MUNICIPAL DE CUREPTO"
	},
	{
		"comuna": "CUREPTO",
		"circunscripcion": "GUALLECO",
		"direccion": "ESCUELA DE GUALLECO"
	},
	{
		"comuna": "CUREPTO",
		"circunscripcion": "HUAQUEN",
		"direccion": "ESCUELA ELENA ARMIJO"
	},
	{
		"comuna": "CURICO",
		"circunscripcion": "CURICO",
		"direccion": "LICEO FERNANDO LAZCANO"
	},
	{
		"comuna": "CURICO",
		"circunscripcion": "LOS NICHES",
		"direccion": "ESCUELA ESTADOS UNIDOS LOS NICHES"
	},
	{
		"comuna": "CURICO",
		"circunscripcion": "SARMIENTO",
		"direccion": "ESCUELA MARIA OLGA FIGUEROA"
	},
	{
		"comuna": "EMPEDRADO",
		"circunscripcion": "EMPEDRADO",
		"direccion": "AGUSTIN QUINTANA S/N"
	},
	{
		"comuna": "HUALAÑE",
		"circunscripcion": "HUALAÑE",
		"direccion": "LICEO HUALAÑE"
	},
	{
		"comuna": "HUALAÑE",
		"circunscripcion": "LA HUERTA",
		"direccion": "ESCUELA LA HUERTA GABRIELA MISTRAL"
	},
	{
		"comuna": "LICANTEN",
		"circunscripcion": "ILOCA",
		"direccion": "COLEGIO DOCTOR MANUEL AVILES"
	},
	{
		"comuna": "LICANTEN",
		"circunscripcion": "LICANTEN",
		"direccion": "ESCUELA BASICA DE LICANTEN AUGUSTO SANTELICES"
	},
	{
		"comuna": "LINARES",
		"circunscripcion": "LINARES",
		"direccion": "PLAZA DE ARMAS"
	},
	{
		"comuna": "LONGAVI",
		"circunscripcion": "LONGAVI",
		"direccion": "ESCUELA JUAN DE LA CRUZ DOMINGUEZ"
	},
	{
		"comuna": "MAULE",
		"circunscripcion": "COLIN",
		"direccion": "ESCUELA COLIN"
	},
	{
		"comuna": "MAULE",
		"circunscripcion": "DUAO",
		"direccion": "COLEGIO DE DUAO"
	},
	{
		"comuna": "MAULE",
		"circunscripcion": "MAULE",
		"direccion": "GIMNASIO MUNICIPAL"
	},
	{
		"comuna": "MOLINA",
		"circunscripcion": "LONTUE",
		"direccion": "ESCUELA EDUARDO FREI"
	},
	{
		"comuna": "MOLINA",
		"circunscripcion": "MOLINA",
		"direccion": "LICEO BICENTENARIO"
	},
	{
		"comuna": "MOLINA",
		"circunscripcion": "TRES ESQUINAS",
		"direccion": "ESCUELA LAS PALMAS"
	},
	{
		"comuna": "PARRAL",
		"circunscripcion": "ARRAU-MENDEZ",
		"direccion": "AVDA DOS SUR LADO ESTADIO"
	},
	{
		"comuna": "PARRAL",
		"circunscripcion": "BUENOS AIRES",
		"direccion": "AVDA DOS SUR LADO ESTADIO"
	},
	{
		"comuna": "PARRAL",
		"circunscripcion": "CATILLO",
		"direccion": "AVDA DOS SUR LADO ESTADIO"
	},
	{
		"comuna": "PARRAL",
		"circunscripcion": "PARRAL",
		"direccion": "AVDA DOS SUR LADO ESTADIO"
	},
	{
		"comuna": "PELARCO",
		"circunscripcion": "PELARCO",
		"direccion": "LICEO PELARCO"
	},
	{
		"comuna": "PELLUHUE",
		"circunscripcion": "PELLUHUE",
		"direccion": "SAMUEL JOFRE #580"
	},
	{
		"comuna": "PENCAHUE",
		"circunscripcion": "CORINTO",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "PENCAHUE",
		"circunscripcion": "PENCAHUE",
		"direccion": "LADO DE LA MEDIALUNA"
	},
	{
		"comuna": "PENCAHUE",
		"circunscripcion": "PENCAHUE-BATUCO",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "PENCAHUE",
		"circunscripcion": "TOCONEY",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "RAUCO",
		"circunscripcion": "RAUCO",
		"direccion": "ESCUELA RAUCO"
	},
	{
		"comuna": "RETIRO",
		"circunscripcion": "RETIRO",
		"direccion": "AVDA ERRAZURIZ 480"
	},
	{
		"comuna": "RIO CLARO",
		"circunscripcion": "RIO CLARO (CUMPEO)",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "ROMERAL",
		"circunscripcion": "ROMERAL",
		"direccion": "IGNACIO CARRERA PINTO #1275 PLAZA DE ARMAS"
	},
	{
		"comuna": "SAGRADA FAMILIA",
		"circunscripcion": "SAGRADA FAMILIA",
		"direccion": "COLEGIO MONSEÑOR ENRIQUE CORREA"
	},
	{
		"comuna": "SAGRADA FAMILIA",
		"circunscripcion": "VILLA PRAT",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "SAN CLEMENTE",
		"circunscripcion": "SAN CLEMENTE",
		"direccion": "LICEO ENTRERIOS SAN CLEMENTE"
	},
	{
		"comuna": "SAN CLEMENTE",
		"circunscripcion": "VILCHES",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "SAN JAVIER",
		"circunscripcion": "HUERTA DEL MAULE",
		"direccion": "AL LADO NORTE IGLESIA"
	},
	{
		"comuna": "SAN JAVIER",
		"circunscripcion": "MELOZAL",
		"direccion": "POBLACION LA ILUSION DE MELOZAL"
	},
	{
		"comuna": "SAN JAVIER",
		"circunscripcion": "NIRIVILO",
		"direccion": "CALLE 21 DE MAYO #563"
	},
	{
		"comuna": "SAN JAVIER",
		"circunscripcion": "SAN JAVIER",
		"direccion": "ARTURO PRAT #2445"
	},
	{
		"comuna": "SAN RAFAEL",
		"circunscripcion": "SAN RAFAEL",
		"direccion": "ESCUELA BASICA SAN RAFAEL"
	},
	{
		"comuna": "TALCA",
		"circunscripcion": "TALCA",
		"direccion": "5 ORIENTE ENTRE 1 Y 2 NORTE"
	},
	{
		"comuna": "TENO",
		"circunscripcion": "TENO",
		"direccion": "GIMNASIO MUNICIPAL TENO"
	},
	{
		"comuna": "VICHUQUEN",
		"circunscripcion": "LLICO DE MATAQUITO",
		"direccion": "LICEO ENTRE AGUAS"
	},
	{
		"comuna": "VICHUQUEN",
		"circunscripcion": "VICHUQUEN",
		"direccion": "LICEO NUEVA HORIZONTE"
	},
	{
		"comuna": "VILLA ALEGRE",
		"circunscripcion": "VILLA ALEGRE",
		"direccion": "12 DE OCTUBRE S/N"
	},
	{
		"comuna": "YERBAS BUENAS",
		"circunscripcion": "ORILLA DEL MAULE",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "YERBAS BUENAS",
		"circunscripcion": "YERBAS BUENAS",
		"direccion": "LICEO JUAN DE DIOS PUGA"
	},
	{
		"comuna": "ALTO BIOBIO",
		"circunscripcion": "ALTO BIOBIO",
		"direccion": "RALCO LEPOY"
	},
	{
		"comuna": "ALTO BIOBIO",
		"circunscripcion": "CAUÑICU",
		"direccion": "RALCO LEPOY"
	},
	{
		"comuna": "ALTO BIOBIO",
		"circunscripcion": "RALCO LEPOY",
		"direccion": "RALCO LEPOY"
	},
	{
		"comuna": "ANTUCO",
		"circunscripcion": "ANTUCO",
		"direccion": "ARTURO PRAT #105"
	},
	{
		"comuna": "ARAUCO",
		"circunscripcion": "ARAUCO",
		"direccion": "CHACABUCO 116, ARAUCO"
	},
	{
		"comuna": "ARAUCO",
		"circunscripcion": "CARAMPANGUE",
		"direccion": "CONDELL 80 CARAMPANGUE"
	},
	{
		"comuna": "ARAUCO",
		"circunscripcion": "LARAQUETE",
		"direccion": "LA CANTERA S/N"
	},
	{
		"comuna": "ARAUCO",
		"circunscripcion": "LLICO",
		"direccion": "LLICO S/N"
	},
	{
		"comuna": "ARAUCO",
		"circunscripcion": "PUNTA LAVAPIE",
		"direccion": "LOCALIDAD PUNTA LAVAPIE S/N KM 43 CAMINO A TUBUL"
	},
	{
		"comuna": "ARAUCO",
		"circunscripcion": "RAMADILLAS",
		"direccion": "IGNACIO CARRERA PINTO 50"
	},
	{
		"comuna": "ARAUCO",
		"circunscripcion": "TUBUL",
		"direccion": "CALLE CENTRAL 24"
	},
	{
		"comuna": "CABRERO",
		"circunscripcion": "CABRERO",
		"direccion": "AVENIDA VIAL S/N"
	},
	{
		"comuna": "CABRERO",
		"circunscripcion": "MONTE AGUILA",
		"direccion": "CARLOS VIEL 299, MONTE ÁGUILA, COMUNA DE CABRERO. 299"
	},
	{
		"comuna": "CAÑETE",
		"circunscripcion": "CAÑETE",
		"direccion": "CONDEL #158"
	},
	{
		"comuna": "CHIGUAYANTE",
		"circunscripcion": "CHIGUAYANTE",
		"direccion": "COCHRANE 562 CHIGUAYANTE"
	},
	{
		"comuna": "CHIGUAYANTE",
		"circunscripcion": "CHIGUAYANTE",
		"direccion": "COCHRANE 162 CHIGUAYANTE"
	},
	{
		"comuna": "CONCEPCION",
		"circunscripcion": "ANDALIEN",
		"direccion": "AVENIDA PRINCIPAL 364, VILLA CAP"
	},
	{
		"comuna": "CONCEPCION",
		"circunscripcion": "CONCEPCION CENTRO",
		"direccion": "AVENIDA ROOSEVELT N° 1596"
	},
	{
		"comuna": "CONCEPCION",
		"circunscripcion": "CONCEPCION CENTRO",
		"direccion": "SAN MARTIN ESQUINA GALVARINO"
	},
	{
		"comuna": "CONTULMO",
		"circunscripcion": "CONTULMO",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "CORONEL",
		"circunscripcion": "CORONEL",
		"direccion": "ERRATCHOU 816"
	},
	{
		"comuna": "CORONEL",
		"circunscripcion": "ISLA SANTA MARIA",
		"direccion": "ERRATCHOU 816"
	},
	{
		"comuna": "CORONEL",
		"circunscripcion": "LAGUNILLAS",
		"direccion": "ERRATCHOU 816"
	},
	{
		"comuna": "CURANILAHUE",
		"circunscripcion": "CURANILAHUE",
		"direccion": "ARTURO PRAT 1328"
	},
	{
		"comuna": "CURANILAHUE",
		"circunscripcion": "SAN JOSE DE COLICO",
		"direccion": "BLANCO ENCALADA S/N SAN JOSE COLICO"
	},
	{
		"comuna": "FLORIDA",
		"circunscripcion": "COPIULEMU",
		"direccion": "ALEMANIA N° 15"
	},
	{
		"comuna": "FLORIDA",
		"circunscripcion": "FLORIDA",
		"direccion": "ORTIZ DE ROZAS N°484"
	},
	{
		"comuna": "HUALPEN",
		"circunscripcion": "HUALPEN",
		"direccion": "FINLANDIA 932"
	},
	{
		"comuna": "HUALPEN",
		"circunscripcion": "HUALPEN",
		"direccion": "FINLANDIA 912"
	},
	{
		"comuna": "HUALQUI",
		"circunscripcion": "HUALQUI",
		"direccion": "BULNES 599 HUALQUI"
	},
	{
		"comuna": "HUALQUI",
		"circunscripcion": "TALCAMAVIDA",
		"direccion": "SECTOR ESPERANZA SIN NUMERO"
	},
	{
		"comuna": "LAJA",
		"circunscripcion": "LA LAJA",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "LEBU",
		"circunscripcion": "ISLA MOCHA",
		"direccion": "PARCELA ISLA MOCHA 32"
	},
	{
		"comuna": "LEBU",
		"circunscripcion": "LEBU",
		"direccion": "SAAVEDRA # 138"
	},
	{
		"comuna": "LEBU",
		"circunscripcion": "PEHUEN",
		"direccion": "AVENIDA LOS COPIHUES N° 491"
	},
	{
		"comuna": "LEBU",
		"circunscripcion": "SANTA ROSA",
		"direccion": "CARLOS IBÁÑEZ DEL CAMPO N° 505"
	},
	{
		"comuna": "LOS ALAMOS",
		"circunscripcion": "ANTIHUALA",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "LOS ALAMOS",
		"circunscripcion": "LOS ALAMOS",
		"direccion": "CARRERA PINTO S/N"
	},
	{
		"comuna": "LOS ANGELES",
		"circunscripcion": "CHACAYAL",
		"direccion": "ALMAGRO 237"
	},
	{
		"comuna": "LOS ANGELES",
		"circunscripcion": "LOS ANGELES",
		"direccion": "ALMAGRO 237"
	},
	{
		"comuna": "LOS ANGELES",
		"circunscripcion": "MILLANTU",
		"direccion": "ALMAGRO 237"
	},
	{
		"comuna": "LOS ANGELES",
		"circunscripcion": "PAILLIHUE",
		"direccion": "ALMAGRO 237"
	},
	{
		"comuna": "LOS ANGELES",
		"circunscripcion": "SALTOS DEL LAJA",
		"direccion": "ALMAGRO 237"
	},
	{
		"comuna": "LOS ANGELES",
		"circunscripcion": "SAN CARLOS DE PUREN",
		"direccion": "ALMAGRO 237"
	},
	{
		"comuna": "LOS ANGELES",
		"circunscripcion": "SANTA FE",
		"direccion": "ALMAGRO 237"
	},
	{
		"comuna": "LOTA",
		"circunscripcion": "LOTA",
		"direccion": "PEDRO AGUIRRE CERDA #297"
	},
	{
		"comuna": "MULCHEN",
		"circunscripcion": "MULCHEN",
		"direccion": "GANA 450"
	},
	{
		"comuna": "NACIMIENTO",
		"circunscripcion": "NACIMIENTO",
		"direccion": "SAN MARTIN 480"
	},
	{
		"comuna": "NEGRETE",
		"circunscripcion": "COIGUE",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "NEGRETE",
		"circunscripcion": "NEGRETE",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "PENCO",
		"circunscripcion": "LIRQUEN",
		"direccion": "CAMILO HENRÍQUEZ Nº 6 – LIRQUÉN"
	},
	{
		"comuna": "PENCO",
		"circunscripcion": "PENCO",
		"direccion": "COCHRANE 100"
	},
	{
		"comuna": "QUILACO",
		"circunscripcion": "QUILACO",
		"direccion": "AVENIDA ARTURO PRATT 1491"
	},
	{
		"comuna": "QUILLECO",
		"circunscripcion": "LAS CANTERAS",
		"direccion": "AVDA. LIBERTADOR O´HIGGINS S/N"
	},
	{
		"comuna": "QUILLECO",
		"circunscripcion": "QUILLECO",
		"direccion": "ARTURO PRAT 398"
	},
	{
		"comuna": "SAN PEDRO DE LA PAZ",
		"circunscripcion": "LOMAS COLORADAS",
		"direccion": "LOS MAÑIOS 6293"
	},
	{
		"comuna": "SAN PEDRO DE LA PAZ",
		"circunscripcion": "SAN PEDRO DE LA PAZ",
		"direccion": "LOS ACACIOS 39"
	},
	{
		"comuna": "SAN ROSENDO",
		"circunscripcion": "SAN ROSENDO",
		"direccion": "CALLE VALLEJOS #130"
	},
	{
		"comuna": "SANTA BARBARA",
		"circunscripcion": "SANTA BARBARA",
		"direccion": "ARTURO PRAT. S/N. SANTA BÁRBARA"
	},
	{
		"comuna": "SANTA JUANA",
		"circunscripcion": "SANTA JUANA",
		"direccion": "CALLE VALDIVIA S/N"
	},
	{
		"comuna": "TALCAHUANO",
		"circunscripcion": "LOS CERROS",
		"direccion": "LOS ARAUCANOS 525, TALCAHUANO, BÍO BÍO"
	},
	{
		"comuna": "TALCAHUANO",
		"circunscripcion": "MEDIO CAMINO",
		"direccion": "EJERCITO 135"
	},
	{
		"comuna": "TALCAHUANO",
		"circunscripcion": "TALCAHUANO",
		"direccion": "SGTO. JUAN DE DIOS ALDEA FONSECA 121"
	},
	{
		"comuna": "TIRUA",
		"circunscripcion": "TIRUA",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "TOME",
		"circunscripcion": "DICHATO",
		"direccion": "DANIEL VERA 780- DICHATO 780"
	},
	{
		"comuna": "TOME",
		"circunscripcion": "RAFAEL",
		"direccion": "URREJOLA 298, RAFAEL 298"
	},
	{
		"comuna": "TOME",
		"circunscripcion": "TOME",
		"direccion": "MARIANO EGANA 1525"
	},
	{
		"comuna": "TUCAPEL",
		"circunscripcion": "POLCURA",
		"direccion": "RICARDO CLARO #145"
	},
	{
		"comuna": "TUCAPEL",
		"circunscripcion": "TRUPAN",
		"direccion": "ALEJANDRO PÉREZ #447"
	},
	{
		"comuna": "TUCAPEL",
		"circunscripcion": "TUCAPEL",
		"direccion": "AV. RUSTICO MOLINA 240"
	},
	{
		"comuna": "TUCAPEL",
		"circunscripcion": "TUCAPEL (HUEPIL)",
		"direccion": "INDEPENDENCIA #444"
	},
	{
		"comuna": "YUMBEL",
		"circunscripcion": "RERE",
		"direccion": "ALONSO SOTOMAYOR S/N"
	},
	{
		"comuna": "YUMBEL",
		"circunscripcion": "RIO CLARO",
		"direccion": "CARLOS O’CARROL 425"
	},
	{
		"comuna": "YUMBEL",
		"circunscripcion": "TOMECO",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "YUMBEL",
		"circunscripcion": "YUMBEL",
		"direccion": "O ‘HIGGINS 851"
	},
	{
		"comuna": "YUMBEL",
		"circunscripcion": "YUMBEL ESTACION",
		"direccion": "LA CONCEPCIÓN S/N"
	},
	{
		"comuna": "ANGOL",
		"circunscripcion": "ANGOL",
		"direccion": "CAUPOLICÁN 461"
	},
	{
		"comuna": "ANGOL",
		"circunscripcion": "HUEQUEN",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "CARAHUE",
		"circunscripcion": "CARAHUE",
		"direccion": "CALLE PORTALES S/N ESQUINA PEDRO DE VALDIVIA"
	},
	{
		"comuna": "CARAHUE",
		"circunscripcion": "NEHUENTUE",
		"direccion": "ARTURO PRAT S/N ESQUINA DIEGO PORTALES"
	},
	{
		"comuna": "CARAHUE",
		"circunscripcion": "TROVOLHUE",
		"direccion": "CALLE ROMILIO ADRIAZOLA"
	},
	{
		"comuna": "CHOLCHOL",
		"circunscripcion": "CHOLCHOL",
		"direccion": "ERRAZURIZ 660"
	},
	{
		"comuna": "COLLIPULLI",
		"circunscripcion": "COLLIPULLI",
		"direccion": "BULNES 324 COLLIPULLI"
	},
	{
		"comuna": "COLLIPULLI",
		"circunscripcion": "MININCO",
		"direccion": "VILLA MININCO, LAUTARO 96"
	},
	{
		"comuna": "CUNCO",
		"circunscripcion": "CUNCO",
		"direccion": "DOMINGO SANTA MARIA S/N CUNCO"
	},
	{
		"comuna": "CUNCO",
		"circunscripcion": "LOS LAURELES",
		"direccion": "CALLE RICARDO VALDES N°89 LOS LAURELES"
	},
	{
		"comuna": "CURACAUTIN",
		"circunscripcion": "CURACAUTIN",
		"direccion": "YUNGAY #490 ESQUINA SARGENTO ALDEA."
	},
	{
		"comuna": "CURACAUTIN",
		"circunscripcion": "MALALCAHUELLO",
		"direccion": "RUTA CH 181 KILOMETRO 87,5"
	},
	{
		"comuna": "CURARREHUE",
		"circunscripcion": "CURARREHUE",
		"direccion": "LICEO MONSEÑOR FRANCISCO VALDES SUBERCASEUX"
	},
	{
		"comuna": "ERCILLA",
		"circunscripcion": "ERCILLA",
		"direccion": "AVENIDA ERCILLA 389"
	},
	{
		"comuna": "ERCILLA",
		"circunscripcion": "PAILAHUEQUE",
		"direccion": "O”HIGGINS S/N (ENTRE LA CALLE ANDRES BELLO , MONTT Y PRAT)"
	},
	{
		"comuna": "FREIRE",
		"circunscripcion": "FREIRE",
		"direccion": "PUREN 121"
	},
	{
		"comuna": "FREIRE",
		"circunscripcion": "QUEPE",
		"direccion": "CARLOS CONDELL 483"
	},
	{
		"comuna": "FREIRE",
		"circunscripcion": "RADAL",
		"direccion": "ARTURO PRAT S/N. – RADAL"
	},
	{
		"comuna": "GALVARINO",
		"circunscripcion": "GALVARINO",
		"direccion": "CALLE CAUPOLICAN N°55."
	},
	{
		"comuna": "GORBEA",
		"circunscripcion": "GORBEA",
		"direccion": "MANUEL BLANCO ENCALADA 580 GORBEA"
	},
	{
		"comuna": "GORBEA",
		"circunscripcion": "LASTARRIA",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "GORBEA",
		"circunscripcion": "QUITRATUE",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "LAUTARO",
		"circunscripcion": "LAUTARO",
		"direccion": "LICEO B-15,"
	},
	{
		"comuna": "LAUTARO",
		"circunscripcion": "PILLANLELBUN",
		"direccion": "LICEO LOS CASTAÑOS,"
	},
	{
		"comuna": "LONCOCHE",
		"circunscripcion": "HUISCAPI",
		"direccion": "BERNARDO O’HIGGINS 302 HUISCAPI"
	},
	{
		"comuna": "LONCOCHE",
		"circunscripcion": "LA PAZ",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "LONCOCHE",
		"circunscripcion": "LONCOCHE",
		"direccion": "ARTURO PRAT 400"
	},
	{
		"comuna": "LONQUIMAY",
		"circunscripcion": "ICALMA",
		"direccion": "CAMINO INTERNACIONAL ICALMA KM 75"
	},
	{
		"comuna": "LONQUIMAY",
		"circunscripcion": "LIUCURA",
		"direccion": "CAMINO INTERNACIONAL VILLA LIUCURA KM42"
	},
	{
		"comuna": "LONQUIMAY",
		"circunscripcion": "LONQUIMAY",
		"direccion": "CHAQUILVIN N°1150"
	},
	{
		"comuna": "LOS SAUCES",
		"circunscripcion": "LOS SAUCES",
		"direccion": "AVENIDA LA SANTA CON A. PRAT S/N"
	},
	{
		"comuna": "LUMACO",
		"circunscripcion": "CAPITAN PASTENE",
		"direccion": "CALLE DANTE 289"
	},
	{
		"comuna": "LUMACO",
		"circunscripcion": "LUMACO",
		"direccion": "IGNACIO SERRANO 394"
	},
	{
		"comuna": "LUMACO",
		"circunscripcion": "PICHIPELLAHUEN",
		"direccion": "CALLE PRINCIPAL S/ N"
	},
	{
		"comuna": "MELIPEUCO",
		"circunscripcion": "MELIPEUCO",
		"direccion": "ACCESO POR PEDRO AGUIRRE CERDA"
	},
	{
		"comuna": "NUEVA IMPERIAL",
		"circunscripcion": "NUEVA IMPERIAL",
		"direccion": "ERNESTO RIQUELME N°365"
	},
	{
		"comuna": "PADRE LAS CASAS",
		"circunscripcion": "PADRE LAS CASAS",
		"direccion": "BARROSO 360"
	},
	{
		"comuna": "PADRE LAS CASAS",
		"circunscripcion": "SAN RAMON (Padre las Casas)",
		"direccion": "CALLE LOS MANANTIALES CON GALILEA"
	},
	{
		"comuna": "PERQUENCO",
		"circunscripcion": "PERQUENCO",
		"direccion": "21 DE MAYO N° 448 COMUNA DE PERQUENCO."
	},
	{
		"comuna": "PITRUFQUEN",
		"circunscripcion": "COMUY",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "PITRUFQUEN",
		"circunscripcion": "PITRUFQUEN",
		"direccion": "AVDA 12 DE FEBRERO N° 844"
	},
	{
		"comuna": "PUCON",
		"circunscripcion": "PUCON",
		"direccion": "BERNARDO O”HIGGINS 1085"
	},
	{
		"comuna": "PUREN",
		"circunscripcion": "PUREN",
		"direccion": "CALLE DR. GARRIGA 1089"
	},
	{
		"comuna": "RENAICO",
		"circunscripcion": "RENAICO",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "RENAICO",
		"circunscripcion": "TIJERAL",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "SAAVEDRA",
		"circunscripcion": "PUERTO DOMINGUEZ",
		"direccion": "COLEGIO AUGUSTO WINTER DE PUERTO DOMÍNGUEZ"
	},
	{
		"comuna": "SAAVEDRA",
		"circunscripcion": "SAAVEDRA",
		"direccion": "EJÉRCITO 1424"
	},
	{
		"comuna": "TEMUCO",
		"circunscripcion": "CERRO ÑIELOL",
		"direccion": "BALMACEDA 659"
	},
	{
		"comuna": "TEMUCO",
		"circunscripcion": "FUNDO EL CARMEN",
		"direccion": "GIMNASIO MUNICIPAL"
	},
	{
		"comuna": "TEMUCO",
		"circunscripcion": "LABRANZA",
		"direccion": "ESCUELA LABRANZA,"
	},
	{
		"comuna": "TEMUCO",
		"circunscripcion": "PEDRO DE VALDIVIA (TEMUCO)",
		"direccion": "BALMACEDA 659"
	},
	{
		"comuna": "TEMUCO",
		"circunscripcion": "TEMUCO CENTRO",
		"direccion": "BALMACEDA 659"
	},
	{
		"comuna": "TEMUCO",
		"circunscripcion": "TEMUCO NORTE",
		"direccion": "BALMACEDA 659"
	},
	{
		"comuna": "TEMUCO",
		"circunscripcion": "TEMUCO SUR",
		"direccion": "BALMACEDA 659"
	},
	{
		"comuna": "TEODORO SCHMIDT",
		"circunscripcion": "BARROS ARANA",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "TEODORO SCHMIDT",
		"circunscripcion": "HUALPIN",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "TEODORO SCHMIDT",
		"circunscripcion": "TEODORO SCHMIDT",
		"direccion": "BERNARDO O”HIGGINS S/N"
	},
	{
		"comuna": "TOLTEN",
		"circunscripcion": "QUEULE",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "TOLTEN",
		"circunscripcion": "TOLTEN",
		"direccion": "JOSÉ MARÍA CARO 564 NVA TOLTEN"
	},
	{
		"comuna": "TRAIGUEN",
		"circunscripcion": "TRAIGUEN",
		"direccion": "CORONEL URRUTIA 249"
	},
	{
		"comuna": "VICTORIA",
		"circunscripcion": "PUA",
		"direccion": "BAQUEDANO N°260"
	},
	{
		"comuna": "VICTORIA",
		"circunscripcion": "QUINO",
		"direccion": "GABRIELA MISTRAL N° 087"
	},
	{
		"comuna": "VICTORIA",
		"circunscripcion": "SELVA OBSCURA",
		"direccion": "ALTAMIRANO S/N"
	},
	{
		"comuna": "VICTORIA",
		"circunscripcion": "VICTORIA",
		"direccion": "URRUTIA 647"
	},
	{
		"comuna": "VILCUN",
		"circunscripcion": "CAJON",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "VILCUN",
		"circunscripcion": "CHERQUENCO",
		"direccion": "CALLE JAPON S/N"
	},
	{
		"comuna": "VILCUN",
		"circunscripcion": "VILCUN",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "VILLARRICA",
		"circunscripcion": "LICAN-RAY",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "VILLARRICA",
		"circunscripcion": "ÑANCUL",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "VILLARRICA",
		"circunscripcion": "VILLARRICA",
		"direccion": "A UN COSTADO DE LA MUNICIPALIDAD"
	},
	{
		"comuna": "ANCUD",
		"circunscripcion": "ANCUD",
		"direccion": "ALMIRANTE LATORRE 620"
	},
	{
		"comuna": "ANCUD",
		"circunscripcion": "CHACAO",
		"direccion": "ALMIRANTE LATORRE 621"
	},
	{
		"comuna": "ANCUD",
		"circunscripcion": "PILLUCO",
		"direccion": "ALMIRANTE LATORRE 622"
	},
	{
		"comuna": "CALBUCO",
		"circunscripcion": "CALBUCO",
		"direccion": "GALVARINO RIVEROS 401"
	},
	{
		"comuna": "CALBUCO",
		"circunscripcion": "COLACO",
		"direccion": "GALVARINO RIVEROS 401"
	},
	{
		"comuna": "CALBUCO",
		"circunscripcion": "ISLA GUAR",
		"direccion": "GALVARINO RIVEROS 401"
	},
	{
		"comuna": "CALBUCO",
		"circunscripcion": "ISLA PULUQUI",
		"direccion": "GALVARINO RIVEROS 401"
	},
	{
		"comuna": "CALBUCO",
		"circunscripcion": "PARGUA",
		"direccion": "GALVARINO RIVEROS 401"
	},
	{
		"comuna": "CASTRO",
		"circunscripcion": "CASTRO",
		"direccion": "SAN MARTIN 554"
	},
	{
		"comuna": "CASTRO",
		"circunscripcion": "CASTRO SUR",
		"direccion": "SAN MARTIN 554"
	},
	{
		"comuna": "CASTRO",
		"circunscripcion": "QUEHUI",
		"direccion": "QUEHUI S/N"
	},
	{
		"comuna": "CASTRO",
		"circunscripcion": "RILAN",
		"direccion": "RILAN S/N"
	},
	{
		"comuna": "CHAITEN",
		"circunscripcion": "AYACARA",
		"direccion": "SECTOR RURAL AYACARA"
	},
	{
		"comuna": "CHAITEN",
		"circunscripcion": "CHAITEN",
		"direccion": "DIEGO PORTALES S/N"
	},
	{
		"comuna": "CHAITEN",
		"circunscripcion": "VILLA SANTA LUCIA",
		"direccion": "DIEGO PORTALES S/N"
	},
	{
		"comuna": "CHONCHI",
		"circunscripcion": "CHONCHI",
		"direccion": "CHONCHI URBANO"
	},
	{
		"comuna": "CHONCHI",
		"circunscripcion": "CUCAO",
		"direccion": "CUCAO"
	},
	{
		"comuna": "COCHAMO",
		"circunscripcion": "COCHAMO",
		"direccion": "KM 40 SECTOR ENSENADA S/N"
	},
	{
		"comuna": "COCHAMO",
		"circunscripcion": "LLANADA GRANDE",
		"direccion": "KM 40 SECTOR ENSENADA S/N"
	},
	{
		"comuna": "COCHAMO",
		"circunscripcion": "PUELO",
		"direccion": "KM 40 SECTOR ENSENADA S/N"
	},
	{
		"comuna": "CURACO DE VELEZ",
		"circunscripcion": "CURACO DE VELEZ",
		"direccion": "GOLETA ANCUD S/N"
	},
	{
		"comuna": "DALCAHUE",
		"circunscripcion": "DALCAHUE",
		"direccion": "CALLE CAMILO HENRIQUEZ 95"
	},
	{
		"comuna": "DALCAHUE",
		"circunscripcion": "TENAUN",
		"direccion": "CALLE CAMILO HENRIQUEZ 95"
	},
	{
		"comuna": "FRESIA",
		"circunscripcion": "FRESIA",
		"direccion": "BERNARDO OHIGGINS 210"
	},
	{
		"comuna": "FRESIA",
		"circunscripcion": "TEGUALDA",
		"direccion": "CALLE MAULE S/N"
	},
	{
		"comuna": "FRUTILLAR",
		"circunscripcion": "CASMA",
		"direccion": "CALLE ROBERTO SIMPSON 130"
	},
	{
		"comuna": "FRUTILLAR",
		"circunscripcion": "FRUTILLAR",
		"direccion": "LUCILA GODOY S/N"
	},
	{
		"comuna": "FUTALEUFU",
		"circunscripcion": "FUTALEUFU",
		"direccion": "SARGENTO ALDEA ESQ. PILOTO CARMONA"
	},
	{
		"comuna": "HUALAIHUE",
		"circunscripcion": "CONTAO",
		"direccion": "ALERCE SN"
	},
	{
		"comuna": "HUALAIHUE",
		"circunscripcion": "HUALAIHUE",
		"direccion": "DIEGO PORTALES S/N"
	},
	{
		"comuna": "HUALAIHUE",
		"circunscripcion": "HUALAIHUE PUERTO",
		"direccion": "HUALAIHUE PUERTO S/N"
	},
	{
		"comuna": "HUALAIHUE",
		"circunscripcion": "ROLECHA",
		"direccion": "ROLECHA S/N"
	},
	{
		"comuna": "LLANQUIHUE",
		"circunscripcion": "LLANQUIHUE",
		"direccion": "AV LOS VOLCANES 187"
	},
	{
		"comuna": "LOS MUERMOS",
		"circunscripcion": "CAÑITAS",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "LOS MUERMOS",
		"circunscripcion": "LOS MUERMOS",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "MAULLIN",
		"circunscripcion": "CARELMAPU",
		"direccion": "ARTURO PRAT S/N"
	},
	{
		"comuna": "MAULLIN",
		"circunscripcion": "LA PASADA",
		"direccion": "LA PASADA S/N"
	},
	{
		"comuna": "MAULLIN",
		"circunscripcion": "MAULLIN",
		"direccion": "BALMACEDA 206"
	},
	{
		"comuna": "MAULLIN",
		"circunscripcion": "OLMOPULLI",
		"direccion": "OLMOPULLI S/N RUTA V-860"
	},
	{
		"comuna": "MAULLIN",
		"circunscripcion": "QUENUIR",
		"direccion": "VICENTE CARCAMO S/N"
	},
	{
		"comuna": "OSORNO",
		"circunscripcion": "CANCURA",
		"direccion": "RUTA U-655, CANCURA, OSORNO"
	},
	{
		"comuna": "OSORNO",
		"circunscripcion": "OSORNO",
		"direccion": "RAMON FREIRE 752"
	},
	{
		"comuna": "OSORNO",
		"circunscripcion": "RAHUE",
		"direccion": "PACÍFICO 1360"
	},
	{
		"comuna": "OSORNO",
		"circunscripcion": "RAHUE SUR",
		"direccion": "AREQUIPA CON GUATEMALA S/N"
	},
	{
		"comuna": "PALENA",
		"circunscripcion": "PALENA",
		"direccion": "LAS MARIOLAS S/N"
	},
	{
		"comuna": "PUERTO MONTT",
		"circunscripcion": "ALERCE",
		"direccion": "TRANVERSAL 3 N 3020 ALERCE"
	},
	{
		"comuna": "PUERTO MONTT",
		"circunscripcion": "CHAMIZA",
		"direccion": "K20 CARRETERA AUSTRAL"
	},
	{
		"comuna": "PUERTO MONTT",
		"circunscripcion": "CORRENTOSO",
		"direccion": "KM 30 CARRETERA ASUTRAL"
	},
	{
		"comuna": "PUERTO MONTT",
		"circunscripcion": "HUELMO",
		"direccion": "KM 12"
	},
	{
		"comuna": "PUERTO MONTT",
		"circunscripcion": "ISLA MAILLEN",
		"direccion": "ISLA MAILLEN"
	},
	{
		"comuna": "PUERTO MONTT",
		"circunscripcion": "LA VARA",
		"direccion": "CAMINO ALERCE KM7"
	},
	{
		"comuna": "PUERTO MONTT",
		"circunscripcion": "LAS QUEMAS",
		"direccion": "KM 20 SECTOR LAS QUEMAS"
	},
	{
		"comuna": "PUERTO MONTT",
		"circunscripcion": "LENCA",
		"direccion": "CARRETERA AUSTRAL, SECTOR LENCA"
	},
	{
		"comuna": "PUERTO MONTT",
		"circunscripcion": "PUERTO MONTT CENTRO E ISLA TENGLO",
		"direccion": "GUILLERMO GALLARDO 403"
	},
	{
		"comuna": "PUERTO MONTT",
		"circunscripcion": "PUERTO MONTT MIRASOL",
		"direccion": "AV EL MEDITERRANEO S/N VILLA JUAN PABLO 2DO"
	},
	{
		"comuna": "PUERTO MONTT",
		"circunscripcion": "PUERTO MONTT NORTE",
		"direccion": "MAGALLANES 397 POBLACIÓN MANUEL RODRIGUEZ"
	},
	{
		"comuna": "PUERTO OCTAY",
		"circunscripcion": "LAS CASCADAS",
		"direccion": "VICENTE PÉREZ ROSALES 545"
	},
	{
		"comuna": "PUERTO OCTAY",
		"circunscripcion": "PUERTO OCTAY",
		"direccion": "AV. MUÑOZ GAMERO 411"
	},
	{
		"comuna": "PUERTO VARAS",
		"circunscripcion": "ENSENADA",
		"direccion": "KM 40 SECTOR ENSENADA S/N"
	},
	{
		"comuna": "PUERTO VARAS",
		"circunscripcion": "NUEVA BRAUNAU",
		"direccion": "AV.OTTO KLEIN DORNER S/N"
	},
	{
		"comuna": "PUERTO VARAS",
		"circunscripcion": "PEULLA",
		"direccion": "KM 40 SECTOR ENSENADA S/N"
	},
	{
		"comuna": "PUERTO VARAS",
		"circunscripcion": "PUERTO VARAS",
		"direccion": "IMPERIAL ESQ. S/N"
	},
	{
		"comuna": "PUERTO VARAS",
		"circunscripcion": "RALUN",
		"direccion": "KM 40 SECTOR ENSENADA S/N"
	},
	{
		"comuna": "PUQUELDON",
		"circunscripcion": "PUQUELDON",
		"direccion": "TENIENTE MERINO S/N"
	},
	{
		"comuna": "PURRANQUE",
		"circunscripcion": "CONCORDIA",
		"direccion": "SECTOR CRUCERO"
	},
	{
		"comuna": "PURRANQUE",
		"circunscripcion": "CORTE ALTO",
		"direccion": "BERNARDO OHIGGINS S/N"
	},
	{
		"comuna": "PURRANQUE",
		"circunscripcion": "HUEYUSCA",
		"direccion": "HUEYUSCA"
	},
	{
		"comuna": "PURRANQUE",
		"circunscripcion": "PURRANQUE",
		"direccion": "CALLE LAS ERAS 299"
	},
	{
		"comuna": "PUYEHUE",
		"circunscripcion": "PUYEHUE (ENTRE LAGOS)",
		"direccion": "MANUEL RODRIGUEZ 70"
	},
	{
		"comuna": "QUEILEN",
		"circunscripcion": "QUEILEN",
		"direccion": "CARCAMO 300"
	},
	{
		"comuna": "QUELLON",
		"circunscripcion": "MOLULCO",
		"direccion": "SECTOR MOLULCO"
	},
	{
		"comuna": "QUELLON",
		"circunscripcion": "QUELLON",
		"direccion": "AV. LA PAZ S/N"
	},
	{
		"comuna": "QUEMCHI",
		"circunscripcion": "LLIUCO",
		"direccion": "DIEGO BAHAMONDES 111 COSTANERA"
	},
	{
		"comuna": "QUEMCHI",
		"circunscripcion": "MECHUQUE",
		"direccion": "DIEGO BAHAMONDES 111 COSTANERA"
	},
	{
		"comuna": "QUEMCHI",
		"circunscripcion": "METAHUE",
		"direccion": "DIEGO BAHAMONDES 111 COSTANERA"
	},
	{
		"comuna": "QUEMCHI",
		"circunscripcion": "MONTEMAR",
		"direccion": "DIEGO BAHAMONDES 111 COSTANERA"
	},
	{
		"comuna": "QUEMCHI",
		"circunscripcion": "QUEMCHI",
		"direccion": "DIEGO BAHAMONDES 111 COSTANERA"
	},
	{
		"comuna": "QUINCHAO",
		"circunscripcion": "APIAO",
		"direccion": "CALLE EL PROGRESO 071"
	},
	{
		"comuna": "QUINCHAO",
		"circunscripcion": "CHAULINEC",
		"direccion": "CALLE EL PROGRESO 071"
	},
	{
		"comuna": "QUINCHAO",
		"circunscripcion": "MEULIN",
		"direccion": "CALLE EL PROGRESO 071"
	},
	{
		"comuna": "QUINCHAO",
		"circunscripcion": "QUENAC",
		"direccion": "CALLE EL PROGRESO 071"
	},
	{
		"comuna": "QUINCHAO",
		"circunscripcion": "QUINCHAO (ACHAO)",
		"direccion": "CALLE EL PROGRESO 071"
	},
	{
		"comuna": "RIO NEGRO",
		"circunscripcion": "RIACHUELO",
		"direccion": "BALMACEDA 490"
	},
	{
		"comuna": "RIO NEGRO",
		"circunscripcion": "RIO NEGRO",
		"direccion": "AV.ALBERTO HURTADO S/N"
	},
	{
		"comuna": "SAN JUAN DE LA COSTA",
		"circunscripcion": "BAHIA MANSA",
		"direccion": "MANSA S/N"
	},
	{
		"comuna": "SAN JUAN DE LA COSTA",
		"circunscripcion": "MISION DE LA COSTA",
		"direccion": "SECTOR MISION"
	},
	{
		"comuna": "SAN JUAN DE LA COSTA",
		"circunscripcion": "SAN JUAN DE LA COSTA",
		"direccion": "PUAUCHO"
	},
	{
		"comuna": "SAN PABLO",
		"circunscripcion": "QUILACAHUIN",
		"direccion": "QUILACAHUIN"
	},
	{
		"comuna": "SAN PABLO",
		"circunscripcion": "SAN PABLO",
		"direccion": "COVARRUBIAS 199"
	},
	{
		"comuna": "AYSEN",
		"circunscripcion": "AISEN",
		"direccion": "CALLE JUAN DOUGNAC N°465"
	},
	{
		"comuna": "AYSEN",
		"circunscripcion": "MAÑIHUALES",
		"direccion": "CALLE DIEGO PORTALES S/N°"
	},
	{
		"comuna": "AYSEN",
		"circunscripcion": "PUERTO AGUIRRE",
		"direccion": "CALLE SAN MARTÍN S/N°"
	},
	{
		"comuna": "AYSEN",
		"circunscripcion": "PUERTO CHACABUCO",
		"direccion": "SEDE PESCADORES WALTON MONTIEL"
	},
	{
		"comuna": "CHILE CHICO",
		"circunscripcion": "CHILE CHICO",
		"direccion": "JOSÉ MIGUEL CARRERA S/N°"
	},
	{
		"comuna": "CHILE CHICO",
		"circunscripcion": "PUERTO GUADAL",
		"direccion": "JOSÉ MIGUEL CARRERA S/N°"
	},
	{
		"comuna": "CISNES",
		"circunscripcion": "CISNES",
		"direccion": "CALLE GABRIELA MISTRAL S/N°"
	},
	{
		"comuna": "CISNES",
		"circunscripcion": "CORCOVADO",
		"direccion": "CALLE GABRIELA MISTRAL S/N°"
	},
	{
		"comuna": "CISNES",
		"circunscripcion": "LA JUNTA",
		"direccion": "OTTO UBEL S/N°"
	},
	{
		"comuna": "CISNES",
		"circunscripcion": "PUYUHUAPI",
		"direccion": "OTTO UBEL S/N°"
	},
	{
		"comuna": "COCHRANE",
		"circunscripcion": "COCHRANE",
		"direccion": "CALLE TENIENTE MERINO N°585"
	},
	{
		"comuna": "COYHAIQUE",
		"circunscripcion": "BALMACEDA",
		"direccion": "CALLE FREIRE N°1671, COYHAIQUE"
	},
	{
		"comuna": "COYHAIQUE",
		"circunscripcion": "COYHAIQUE",
		"direccion": "CALLE FREIRE N°1671"
	},
	{
		"comuna": "COYHAIQUE",
		"circunscripcion": "ÑIREHUAO",
		"direccion": "CALLE FREIRE N°1671, COYHAIQUE"
	},
	{
		"comuna": "COYHAIQUE",
		"circunscripcion": "VALLE SIMPSON",
		"direccion": "CALLE CLODOMIRO MILLAR S/N°"
	},
	{
		"comuna": "COYHAIQUE",
		"circunscripcion": "VILLA ORTEGA",
		"direccion": "CALLE FREIRE N°1671, COYHAIQUE"
	},
	{
		"comuna": "GUAITECAS",
		"circunscripcion": "GUAITECAS",
		"direccion": "PASAJE LOS CHONOS S/N°"
	},
	{
		"comuna": "LAGO VERDE",
		"circunscripcion": "LA TAPERA",
		"direccion": "CALLE BERNARDO O’HIGGINS S/N°"
	},
	{
		"comuna": "LAGO VERDE",
		"circunscripcion": "LAGO VERDE",
		"direccion": "CALLE BERNARDO O’HIGGINS S/N°"
	},
	{
		"comuna": "LAGO VERDE",
		"circunscripcion": "VILLA AMENGUAL",
		"direccion": "CALLE BERNARDO O’HIGGINS S/N°"
	},
	{
		"comuna": "O’HIGGINS",
		"circunscripcion": "O’HIGGINS",
		"direccion": "LAGO O’HIGGINS ESQUINA RÍO BRAVO"
	},
	{
		"comuna": "RIO IBAÑEZ",
		"circunscripcion": "BAHIA MURTA",
		"direccion": "CALLE DOCTOR PASTEUR ESQUINA CALLE CARLOS SOZA"
	},
	{
		"comuna": "RIO IBAÑEZ",
		"circunscripcion": "RIO IBAÑEZ",
		"direccion": "CALLE DOCTOR PASTEUR ESQUINA CALLE CARLOS SOZA"
	},
	{
		"comuna": "RIO IBAÑEZ",
		"circunscripcion": "RIO TRANQUILO",
		"direccion": "CALLE DOCTOR PASTEUR ESQUINA CALLE CARLOS SOZA"
	},
	{
		"comuna": "RIO IBAÑEZ",
		"circunscripcion": "VILLA CERRO CASTILLO",
		"direccion": "CALLE DOCTOR PASTEUR ESQUINA CALLE CARLOS SOZA"
	},
	{
		"comuna": "TORTEL",
		"circunscripcion": "TORTEL",
		"direccion": "PLAZA S/N°"
	},
	{
		"comuna": "ANTARTICA",
		"circunscripcion": "ANTARTICA",
		"direccion": "MARAGAÑO ESQ PRAT SN (PUERTO WILLIAMS)"
	},
	{
		"comuna": "CABO DE HORNOS(EX-NAVARINO)",
		"circunscripcion": "CABO DE HORNOS (NAVARINO)",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "LAGUNA BLANCA",
		"circunscripcion": "LAGUNA BLANCA",
		"direccion": "VOTA EN LOCALES DE PUNTA ARENAS"
	},
	{
		"comuna": "NATALES",
		"circunscripcion": "NATALES",
		"direccion": "BERNARDO PHILLIPPI 474"
	},
	{
		"comuna": "NATALES",
		"circunscripcion": "PUERTO EDEN",
		"direccion": "BERNARDO PHILLIPPI 474"
	},
	{
		"comuna": "PORVENIR",
		"circunscripcion": "PORVENIR",
		"direccion": "MANUEL SEÑORET 688"
	},
	{
		"comuna": "PRIMAVERA",
		"circunscripcion": "PRIMAVERA",
		"direccion": "CALLE NUEVA 2, PRIMAVERA"
	},
	{
		"comuna": "PUERTO WILLIA",
		"circunscripcion": "",
		"direccion": "MARAGAÑO ESQ PRAT S/N"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "HORNILLAS 01064"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "JOSÉ MENÉNDEZ 151"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "RÓMULO CORREA 02089"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "PRAT 2075"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "QUILLOTA 1175"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "LOS COLONIZADORES 3415"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "CAPITÁN SERRANO 120"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "RODOLFO NOVOA 0804"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "AUGUSTO LUTZ 1007"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "AV. CASTRO 0253"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "PASAJE CABO DE HORNOS S/N"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "CARLOS SIMONS 333 (POBL. MANUEL AGUILAR)"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "ESPAÑA 2673"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "AV. PEDRO AGUIRRE CERDA 524"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "MEJICANA 476"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "TENIENTE SERRANO 0294"
	},
	{
		"comuna": "PUNTA ARENAS",
		"circunscripcion": "PUNTA ARENAS",
		"direccion": "IGNACIO CARRERA PINTO ESQ MAGALLANES"
	},
	{
		"comuna": "RIO VERDE",
		"circunscripcion": "RIO VERDE",
		"direccion": "VOTA EN LOCALES DE PUNTA ARENAS"
	},
	{
		"comuna": "SAN GREGORIO",
		"circunscripcion": "SAN GREGORIO",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "TIMAUKEL",
		"circunscripcion": "TIMAUKEL",
		"direccion": "MANUEL SEÑORET 688 (PORVENIR)"
	},
	{
		"comuna": "TORRES DEL PAINE",
		"circunscripcion": "TORRES DEL PAINE (C. CASTILLO)",
		"direccion": "BERNARDO PHILLIPPI 474 (PUERTO NATALES)"
	},
	{
		"comuna": "ALHUE",
		"circunscripcion": "ALHUE",
		"direccion": "CHIRRILLO S/N, ALHUE"
	},
	{
		"comuna": "BUIN",
		"circunscripcion": "ALTO JAHUEL",
		"direccion": "MANUEL MONTT (EN LA PLAZA)"
	},
	{
		"comuna": "BUIN",
		"circunscripcion": "BUIN",
		"direccion": "MANUEL MONTT (EN LA PLAZA)"
	},
	{
		"comuna": "BUIN",
		"circunscripcion": "VALDIVIA DE PAINE",
		"direccion": "MANUEL MONTT (EN LA PLAZA)"
	},
	{
		"comuna": "CALERA DE TANGO",
		"circunscripcion": "CALERA DE TANGO",
		"direccion": "IGNACIO CARRERA PINTO S/N PARADERO 6"
	},
	{
		"comuna": "CERRILLOS",
		"circunscripcion": "CERRILLOS",
		"direccion": "LAS TORRES 539, CERRILLOS"
	},
	{
		"comuna": "CERRO NAVIA",
		"circunscripcion": "CERRO NAVIA",
		"direccion": "AVENIDA LA ESTRELLA 1633"
	},
	{
		"comuna": "COLINA",
		"circunscripcion": "CHICUREO",
		"direccion": "AVENIDA CONCEPCIÓN 264, COLINA"
	},
	{
		"comuna": "COLINA",
		"circunscripcion": "COLINA",
		"direccion": "AVENIDA CONCEPCIÓN 264, COLINA"
	},
	{
		"comuna": "CONCHALI",
		"circunscripcion": "EL CORTIJO",
		"direccion": "ALFALFAL 5750"
	},
	{
		"comuna": "CONCHALI",
		"circunscripcion": "LO NEGRETE",
		"direccion": "ALFALFAL 5750"
	},
	{
		"comuna": "CURACAVI",
		"circunscripcion": "CURACAVI",
		"direccion": "JORGE MONTT 1868"
	},
	{
		"comuna": "EL BOSQUE",
		"circunscripcion": "CAPITAN AVALOS",
		"direccion": "GRAN AVENIDA 9730 PAR. 29"
	},
	{
		"comuna": "EL BOSQUE",
		"circunscripcion": "LUIS CRUZ MARTINEZ",
		"direccion": "GRAN AVENIDA 9740, PAR 29"
	},
	{
		"comuna": "EL MONTE",
		"circunscripcion": "EL MONTE",
		"direccion": "BENAVENTE 149"
	},
	{
		"comuna": "ESTACION CENTRAL",
		"circunscripcion": "ALAMEDA",
		"direccion": "AV. LIBERTDOR BDO. O’HIGGINS 4558, ESTACIÓN CENTRAL"
	},
	{
		"comuna": "ESTACION CENTRAL",
		"circunscripcion": "LAS AMERICAS",
		"direccion": "COYHAIQUE 6055, ESTACIÓN CENTRAL"
	},
	{
		"comuna": "HUECHURABA",
		"circunscripcion": "HUECHURABA",
		"direccion": "CAM. AL BOSQUE DE SANTIAGO 491"
	},
	{
		"comuna": "HUECHURABA",
		"circunscripcion": "LOS LIBERTADORES",
		"direccion": "LASANA 6664"
	},
	{
		"comuna": "INDEPENDENCIA",
		"circunscripcion": "INDEPENDENCIA",
		"direccion": "AVENIDA INDEPENDENCIA 1225"
	},
	{
		"comuna": "ISLA DE MAIPO",
		"circunscripcion": "ISLA DE MAIPO",
		"direccion": "JAIME GUZMÁN N°283"
	},
	{
		"comuna": "LA CISTERNA",
		"circunscripcion": "LA CISTERNA",
		"direccion": "AVENIDA PEDRO AGUIRRE CERDA N° 0184 P.24 GRAN AVENIDA"
	},
	{
		"comuna": "LA FLORIDA",
		"circunscripcion": "BELLAVISTA",
		"direccion": "CABILDO N°160"
	},
	{
		"comuna": "LA FLORIDA",
		"circunscripcion": "SAN JOSE DE LA ESTRELLA",
		"direccion": "SAN JOSÉ DE LA ESTRELLA N°153"
	},
	{
		"comuna": "LA FLORIDA",
		"circunscripcion": "TRINIDAD",
		"direccion": "PASAJE EL QUISCO N° 470"
	},
	{
		"comuna": "LA GRANJA",
		"circunscripcion": "LA GRANJA",
		"direccion": "AVENIDA SAN GREGORIO N° 0140, LA GRANJA"
	},
	{
		"comuna": "LA PINTANA",
		"circunscripcion": "LA PINTANA",
		"direccion": "ANIBAL PINTO 12952"
	},
	{
		"comuna": "LA PINTANA",
		"circunscripcion": "OBSERVATORIO",
		"direccion": "ANIBAL PINTO 12952"
	},
	{
		"comuna": "LA REINA",
		"circunscripcion": "LA REINA A-L",
		"direccion": "QUILLAGUA 40"
	},
	{
		"comuna": "LA REINA",
		"circunscripcion": "LA REINA M-Z",
		"direccion": "GENARO BENAVIDES 6405"
	},
	{
		"comuna": "LAMPA",
		"circunscripcion": "BATUCO",
		"direccion": "AVENIDA ESPAÑA 163, BATUCO"
	},
	{
		"comuna": "LAMPA",
		"circunscripcion": "LAMPA",
		"direccion": "BALMACEDA N° 765"
	},
	{
		"comuna": "LAMPA",
		"circunscripcion": "VALLE GRANDE",
		"direccion": "AVENIDA ESPAÑA 163, BATUCO"
	},
	{
		"comuna": "LAS CONDES",
		"circunscripcion": "APOQUINDO",
		"direccion": "TOMÁS MORO 1651"
	},
	{
		"comuna": "LAS CONDES",
		"circunscripcion": "EL GOLF",
		"direccion": "TOMÁS MORO 1651"
	},
	{
		"comuna": "LO BARNECHEA",
		"circunscripcion": "LO BARNECHEA",
		"direccion": "LO BARNECHEA 1648"
	},
	{
		"comuna": "LO ESPEJO",
		"circunscripcion": "ESTACION LO ESPEJO",
		"direccion": "CARDENAL CARO 03745"
	},
	{
		"comuna": "LO ESPEJO",
		"circunscripcion": "LO VALLEDOR",
		"direccion": "INÉS DE SUAREZ N° 6970"
	},
	{
		"comuna": "LO PRADO",
		"circunscripcion": "LO PRADO",
		"direccion": "LOS CANELOS 836 ALTURA 6500 DE AVENIDA SAN PABLO"
	},
	{
		"comuna": "MACUL",
		"circunscripcion": "JOSE PEDRO ALESSANDRI",
		"direccion": "AV. QUILIN 3250"
	},
	{
		"comuna": "MACUL",
		"circunscripcion": "MACUL",
		"direccion": "AV. QUILIN 3250"
	},
	{
		"comuna": "MAIPU",
		"circunscripcion": "CIUDAD SATELITE",
		"direccion": "AVENIDA 5 DE ABRIL N° 409, MAIPÚ"
	},
	{
		"comuna": "MAIPU",
		"circunscripcion": "LOS PAJARITOS",
		"direccion": "AVENIDA 5 DE ABRIL N° 409, MAIPÚ"
	},
	{
		"comuna": "MAIPU",
		"circunscripcion": "MAIPU",
		"direccion": "AVENIDA 5 DE ABRIL N° 409, MAIPÚ"
	},
	{
		"comuna": "MAIPU",
		"circunscripcion": "MAIPU PONIENTE",
		"direccion": "AVENIDA 5 DE ABRIL N° 409, MAIPÚ"
	},
	{
		"comuna": "MARIA PINTO",
		"circunscripcion": "MARIA PINTO",
		"direccion": "CALLEJÓN EL TRANQUE S/N"
	},
	{
		"comuna": "MELIPILLA",
		"circunscripcion": "MELIPILLA",
		"direccion": "PARDO N°340"
	},
	{
		"comuna": "ÑUÑOA",
		"circunscripcion": "ESTADIO NACIONAL",
		"direccion": "PEDRO DE VALDIVIA 4862"
	},
	{
		"comuna": "ÑUÑOA",
		"circunscripcion": "PLAZA EGAÑA",
		"direccion": "CALLE FRANCISCO DE VILLAGRA 185"
	},
	{
		"comuna": "ÑUÑOA",
		"circunscripcion": "PLAZA ÑUÑOA",
		"direccion": "CALLE HUMBERTO TRUCCO 123"
	},
	{
		"comuna": "PADRE HURTADO",
		"circunscripcion": "PADRE HURTADO",
		"direccion": "AV. PRIMERA TRANSVERSAL 420, PADRE HURTADO"
	},
	{
		"comuna": "PAINE",
		"circunscripcion": "CHAMPA",
		"direccion": "DIEGO PORTALES S/N HOSPITAL"
	},
	{
		"comuna": "PAINE",
		"circunscripcion": "HUELQUEN",
		"direccion": "CAMINO SANTA FILOMENA S/N, HUELQUÉN"
	},
	{
		"comuna": "PAINE",
		"circunscripcion": "PAINE",
		"direccion": "CALLE CONCEPCIÓN N° 568"
	},
	{
		"comuna": "PEDRO AGUIRRE CERDA",
		"circunscripcion": "P AGUIRRE CERDA N.",
		"direccion": "PASEO GROHNERT 5510 VILLA SUR"
	},
	{
		"comuna": "PEDRO AGUIRRE CERDA",
		"circunscripcion": "P AGUIRRE CERDA S.",
		"direccion": "PASEO GROHNERT 5510 VILLA SUR"
	},
	{
		"comuna": "PEÑAFLOR",
		"circunscripcion": "PEÑAFLOR",
		"direccion": "CALLE EMILIA LASCAR 160"
	},
	{
		"comuna": "PEÑALOLEN",
		"circunscripcion": "CONSISTORIAL",
		"direccion": "EL JARDÍN N°1565"
	},
	{
		"comuna": "PEÑALOLEN",
		"circunscripcion": "PEÑALOLEN",
		"direccion": "CONFLUENCIA N°1820"
	},
	{
		"comuna": "PEÑALOLEN",
		"circunscripcion": "SAN LUIS",
		"direccion": "CALLE – A N° 6301"
	},
	{
		"comuna": "PIRQUE",
		"circunscripcion": "EL PRINCIPAL",
		"direccion": "CARLOS VIAL INFANTE 233"
	},
	{
		"comuna": "PIRQUE",
		"circunscripcion": "PIRQUE",
		"direccion": "CARLOS VIAL INFANTE 233"
	},
	{
		"comuna": "PROVIDENCIA",
		"circunscripcion": "PROVIDENCIA",
		"direccion": "MIGUEL CLARO 32"
	},
	{
		"comuna": "PUDAHUEL",
		"circunscripcion": "CIUDAD DE LOS VALLES",
		"direccion": "AVENIDA SIMÓM BOLIVAR S/N"
	},
	{
		"comuna": "PUDAHUEL",
		"circunscripcion": "PUDAHUEL",
		"direccion": "SAN PABLO 8560"
	},
	{
		"comuna": "PUDAHUEL",
		"circunscripcion": "PUDAHUEL SUR",
		"direccion": "LAGUNA SUR 8543"
	},
	{
		"comuna": "PUENTE ALTO",
		"circunscripcion": "BAJOS DE MENA",
		"direccion": "EYZAGUIRRE 3998"
	},
	{
		"comuna": "PUENTE ALTO",
		"circunscripcion": "PUENTE ALTO",
		"direccion": "AV. ERENESTO ALVEAR N°90"
	},
	{
		"comuna": "PUENTE ALTO",
		"circunscripcion": "SOTERO DEL RIO",
		"direccion": "LOS TOROS N° 1600"
	},
	{
		"comuna": "QUILICURA",
		"circunscripcion": "QUILICURA",
		"direccion": "JOSÉ FRANCISCO VERGARA 399"
	},
	{
		"comuna": "QUINTA NORMAL",
		"circunscripcion": "QUINTA NORMAL",
		"direccion": "AYUNTAMIENTO 2192"
	},
	{
		"comuna": "RECOLETA",
		"circunscripcion": "RECOLETA NORTE",
		"direccion": "BUENOS AIRES 575"
	},
	{
		"comuna": "RECOLETA",
		"circunscripcion": "RECOLETA SUR",
		"direccion": "JUSTICIA SOCIAL 525"
	},
	{
		"comuna": "RENCA",
		"circunscripcion": "RENCA",
		"direccion": "CALLE DORSAL 1365"
	},
	{
		"comuna": "SAN BERNARDO",
		"circunscripcion": "LO HERRERA",
		"direccion": "FRANCISCO ARANDA N° 578"
	},
	{
		"comuna": "SAN BERNARDO",
		"circunscripcion": "SAN BERNARDO",
		"direccion": "FRANCISCO ARANDA N° 578"
	},
	{
		"comuna": "SAN JOAQUIN",
		"circunscripcion": "SAN JOAQUIN",
		"direccion": "HUARA 5379"
	},
	{
		"comuna": "SAN JOSE DE MAIPO",
		"circunscripcion": "SAN JOSE DE MAIPO",
		"direccion": "INMACULADA 414"
	},
	{
		"comuna": "SAN JOSE DE MAIPO",
		"circunscripcion": "SAN JOSE DE MAIPO",
		"direccion": "CAMINO EL VOLCAN 19845"
	},
	{
		"comuna": "SAN MIGUEL",
		"circunscripcion": "SAN MIGUEL",
		"direccion": "GASPAR BANDA 4047, SAN MIGUEL"
	},
	{
		"comuna": "SAN PEDRO",
		"circunscripcion": "SAN PEDRO",
		"direccion": "AVENIDA HERMOSILLA N° 4"
	},
	{
		"comuna": "SAN RAMON",
		"circunscripcion": "SAN RAMON",
		"direccion": "ALMIRANTE LATORRE N°9299"
	},
	{
		"comuna": "SANTIAGO",
		"circunscripcion": "EL CENTRO",
		"direccion": "AV. RICARDO CUMMING 21, SANTIAGO."
	},
	{
		"comuna": "SANTIAGO",
		"circunscripcion": "PARQUE ALMAGRO",
		"direccion": "GENERAL URRIOLA 680, SANTIAGO"
	},
	{
		"comuna": "SANTIAGO",
		"circunscripcion": "PARQUE O’HIGGINS",
		"direccion": "SAN DIEGO 1547, SANTIAGO"
	},
	{
		"comuna": "TALAGANTE",
		"circunscripcion": "TALAGANTE",
		"direccion": "BALMACEDA 1220"
	},
	{
		"comuna": "TILTIL",
		"circunscripcion": "HUERTOS FAMILIARES",
		"direccion": "UNO SUR 300, HUERTOS FAMILIARES, TIL TIL"
	},
	{
		"comuna": "TILTIL",
		"circunscripcion": "TILTIL",
		"direccion": "DANIEL MOYA 102, TIL TIL"
	},
	{
		"comuna": "VITACURA",
		"circunscripcion": "VITACURA",
		"direccion": "PADRE HURTADO 1150"
	},
	{
		"comuna": "CORRAL",
		"circunscripcion": "CORRAL",
		"direccion": "RANCAGUA N° 45"
	},
	{
		"comuna": "CORRAL",
		"circunscripcion": "ISLA DEL REY",
		"direccion": "ISLA DEL REY"
	},
	{
		"comuna": "FUTRONO",
		"circunscripcion": "CURRIÑE",
		"direccion": "GERMAN RIESCO S/N, FUTRONO"
	},
	{
		"comuna": "FUTRONO",
		"circunscripcion": "FUTRONO",
		"direccion": "GERMAN RIESCO S/N, FUTRONO"
	},
	{
		"comuna": "FUTRONO",
		"circunscripcion": "LLIFEN",
		"direccion": "GERMAN RIESCO S/N, FUTRONO"
	},
	{
		"comuna": "FUTRONO",
		"circunscripcion": "NONTUELA",
		"direccion": "GERMAN RIESCO S/N, FUTRONO"
	},
	{
		"comuna": "LA UNION",
		"circunscripcion": "LA UNION",
		"direccion": "ESMERALDA 951, LA UNIÓN"
	},
	{
		"comuna": "LA UNION",
		"circunscripcion": "PUERTO NUEVO",
		"direccion": "RUTA T-75 N°76 – PUERTO NUEVO, LA UNIÓN"
	},
	{
		"comuna": "LAGO RANCO",
		"circunscripcion": "IGNAO",
		"direccion": "AV. CONCEPCIÓN ESQ. OSORNO, LAGO RANCO"
	},
	{
		"comuna": "LAGO RANCO",
		"circunscripcion": "LAGO RANCO",
		"direccion": "AV. CONCEPCIÓN ESQ. OSORNO, LAGO RANCO"
	},
	{
		"comuna": "LAGO RANCO",
		"circunscripcion": "RIÑINAHUE",
		"direccion": "AV. CONCEPCIÓN ESQ. OSORNO, LAGO RANCO"
	},
	{
		"comuna": "LANCO",
		"circunscripcion": "LANCO",
		"direccion": "LA UNIÓN 1939, LANCO"
	},
	{
		"comuna": "LANCO",
		"circunscripcion": "MALALHUE",
		"direccion": "RUTA 203 N°835 – MALALHUE, LANCO"
	},
	{
		"comuna": "LOS LAGOS",
		"circunscripcion": "ANTILHUE",
		"direccion": "SANTIAGO GAETE Nº 112 POBLACION COLLILELFU"
	},
	{
		"comuna": "LOS LAGOS",
		"circunscripcion": "FOLILCO",
		"direccion": "CAMINO LOS LAGOS A RIÑIHUE KM/15"
	},
	{
		"comuna": "LOS LAGOS",
		"circunscripcion": "LOS LAGOS",
		"direccion": "SANTIAGO GAETE Nº 112 POBLACION COLLILELFU"
	},
	{
		"comuna": "LOS LAGOS",
		"circunscripcion": "RIÑIHUE",
		"direccion": "CAMINO LOS LAGOS A RINIHUE KM/15"
	},
	{
		"comuna": "MAFIL",
		"circunscripcion": "MAFIL",
		"direccion": "BERNARDO O´HIGGINS 306"
	},
	{
		"comuna": "MARIQUINA",
		"circunscripcion": "CIRUELOS",
		"direccion": "TRINCHERAS ESQUINA JOSÉ PUCHI"
	},
	{
		"comuna": "MARIQUINA",
		"circunscripcion": "MARIQUINA",
		"direccion": "TRINCHERAS ESQUINA JOSÉ PUCHI"
	},
	{
		"comuna": "MARIQUINA",
		"circunscripcion": "MEHUIN",
		"direccion": "TRINCHERAS ESQUINA JOSÉ PUCHI"
	},
	{
		"comuna": "MARIQUINA",
		"circunscripcion": "PELCHUQUIN",
		"direccion": "TRINCHERAS ESQUINA JOSÉ PUCHI"
	},
	{
		"comuna": "PAILLACO",
		"circunscripcion": "PAILLACO",
		"direccion": "BARROS ARANA 760, PAILLACO"
	},
	{
		"comuna": "PAILLACO",
		"circunscripcion": "PICHIRROPULLI",
		"direccion": "BARROS ARANA 760, PAILLACO"
	},
	{
		"comuna": "PAILLACO",
		"circunscripcion": "REUMEN",
		"direccion": "BARROS ARANA 760, PAILLACO"
	},
	{
		"comuna": "PANGUIPULLI",
		"circunscripcion": "CHOSHUENCO",
		"direccion": "CHOSHUENCO, PANGUIPULLI"
	},
	{
		"comuna": "PANGUIPULLI",
		"circunscripcion": "COÑARIPE",
		"direccion": "COÑARIPE, PANGUIPULLI"
	},
	{
		"comuna": "PANGUIPULLI",
		"circunscripcion": "LIQUIÑE",
		"direccion": "COÑARIPE, PANGUIPULLI"
	},
	{
		"comuna": "PANGUIPULLI",
		"circunscripcion": "MELEFQUEN",
		"direccion": "EDMUNDO PIEL N°2 – MELEFQUÉN, PANGUIPULLI"
	},
	{
		"comuna": "PANGUIPULLI",
		"circunscripcion": "NELTUME",
		"direccion": "NELTUME, PANGUIPULLI"
	},
	{
		"comuna": "PANGUIPULLI",
		"circunscripcion": "PANGUIPULLI",
		"direccion": "BERNARDO O´HIGGINS 576, PANGUIPULLI"
	},
	{
		"comuna": "RIO BUENO",
		"circunscripcion": "CAYURRUCA",
		"direccion": "CAYURRUCA, RÍO BUENO"
	},
	{
		"comuna": "RIO BUENO",
		"circunscripcion": "CRUCERO",
		"direccion": "CRUCERO, RÍO BUENO"
	},
	{
		"comuna": "RIO BUENO",
		"circunscripcion": "MANTILHUE",
		"direccion": "MANTILHUE, RÍO BUENO"
	},
	{
		"comuna": "RIO BUENO",
		"circunscripcion": "RIO BUENO",
		"direccion": "AV. PRAT 570, RÍO BUENO"
	},
	{
		"comuna": "VALDIVIA",
		"circunscripcion": "LAS ANIMAS",
		"direccion": "PEDRO AGUIRRE CERDA 1002, VALDIVIA"
	},
	{
		"comuna": "VALDIVIA",
		"circunscripcion": "NIEBLA",
		"direccion": "DEL CASTILLO S/N, NIEBLA"
	},
	{
		"comuna": "VALDIVIA",
		"circunscripcion": "VALDIVIA (DESDE ABAD HASTA MANCILLA PILLAMPEL)",
		"direccion": "ARAUCO 642, VALDIVIA"
	},
	{
		"comuna": "VALDIVIA",
		"circunscripcion": "VALDIVIA (DESDE MANCILLA PILLAMPEL HASTA ZYL)",
		"direccion": "ARAUCO 474, VALDIVIA"
	},
	{
		"comuna": "ARICA",
		"circunscripcion": "ARICA",
		"direccion": "CALLE RAFAEL SOTOMAYOR N° 600, ARICA."
	},
	{
		"comuna": "ARICA",
		"circunscripcion": "ARICA NORTE",
		"direccion": "CALLE RAFAEL SOTOMAYOR N° 600, ARICA."
	},
	{
		"comuna": "ARICA",
		"circunscripcion": "SAN MIGUEL DE AZAPA",
		"direccion": "CALLE RAFAEL SOTOMAYOR N° 600, ARICA."
	},
	{
		"comuna": "ARICA",
		"circunscripcion": "SECTOR EX BARRIO INDUSTRIAL DE ARICA",
		"direccion": "CALLE RAFAEL SOTOMAYOR N° 600, ARICA."
	},
	{
		"comuna": "CAMARONES",
		"circunscripcion": "CAMARONES",
		"direccion": "CALLE RAFAEL SOTOMAYOR N° 600, ARICA."
	},
	{
		"comuna": "CAMARONES",
		"circunscripcion": "CODPA",
		"direccion": "CALLE RAFAEL SOTOMAYOR N° 600, ARICA."
	},
	{
		"comuna": "GENERAL LAGOS",
		"circunscripcion": "GENERAL LAGOS",
		"direccion": "CALLE RAFAEL SOTOMAYOR N° 600, ARICA."
	},
	{
		"comuna": "PUTRE",
		"circunscripcion": "BELEN",
		"direccion": "CALLE RAFAEL SOTOMAYOR N° 600, ARICA."
	},
	{
		"comuna": "PUTRE",
		"circunscripcion": "PUTRE",
		"direccion": "CALLE RAFAEL SOTOMAYOR N° 600, ARICA."
	},
	{
		"comuna": "BULNES",
		"circunscripcion": "BULNES",
		"direccion": "CARLOS PALACIOS 488"
	},
	{
		"comuna": "BULNES",
		"circunscripcion": "SANTA CLARA",
		"direccion": "CALLE LARGA 389"
	},
	{
		"comuna": "CHILLAN",
		"circunscripcion": "CHILLAN",
		"direccion": "CLAUDIO ARRAU 755 / CLAUDIO ARRAU 655"
	},
	{
		"comuna": "CHILLAN",
		"circunscripcion": "QUINCHAMALI",
		"direccion": "QUINCHAMALÍ"
	},
	{
		"comuna": "CHILLAN VIEJO",
		"circunscripcion": "CHILLAN VIEJO",
		"direccion": "SOTOMAYOR 406"
	},
	{
		"comuna": "CHILLAN VIEJO",
		"circunscripcion": "RUCAPEQUEN",
		"direccion": "CALLE PRINCIPAL S/N"
	},
	{
		"comuna": "COBQUECURA",
		"circunscripcion": "BUCHUPUREO",
		"direccion": "CHACABUCO 281"
	},
	{
		"comuna": "COBQUECURA",
		"circunscripcion": "COBQUECURA",
		"direccion": "CHACABUCO 281"
	},
	{
		"comuna": "COELEMU",
		"circunscripcion": "COELEMU",
		"direccion": "EXEQUIEL LARENAS 411, COELEMU"
	},
	{
		"comuna": "COELEMU",
		"circunscripcion": "GUARILIHUE",
		"direccion": "CAMINO A GUARILIHUE, KM 14"
	},
	{
		"comuna": "COELEMU",
		"circunscripcion": "RANGUELMO",
		"direccion": "AVDA. NOGUEIRA S/N RANGUELMO S/N"
	},
	{
		"comuna": "COELEMU",
		"circunscripcion": "VEGAS DE ITATA",
		"direccion": "PRAT ESQUINA SERRANO S/N"
	},
	{
		"comuna": "COIHUECO",
		"circunscripcion": "BUSTAMANTE",
		"direccion": "BUSTAMANTE S/N"
	},
	{
		"comuna": "COIHUECO",
		"circunscripcion": "COIHUECO",
		"direccion": "BALMACEDA 1419"
	},
	{
		"comuna": "COIHUECO",
		"circunscripcion": "COIHUECO SUR",
		"direccion": "ESCUELA ESTACIÓN PINTO"
	},
	{
		"comuna": "EL CARMEN",
		"circunscripcion": "EL CARMEN",
		"direccion": "ESMERALDA 134"
	},
	{
		"comuna": "NINHUE",
		"circunscripcion": "NINHUE",
		"direccion": "18 DE SEPTIEMBRE 240, NINHUE"
	},
	{
		"comuna": "ÑIQUEN",
		"circunscripcion": "ÑIQUEN",
		"direccion": "CALLE ESTADO, FRENTE A MUNICIPALIDAD"
	},
	{
		"comuna": "PEMUCO",
		"circunscripcion": "GENERAL CRUZ",
		"direccion": "POR CONFIRMAR"
	},
	{
		"comuna": "PEMUCO",
		"circunscripcion": "PEMUCO",
		"direccion": "ARTURO PRAT 471"
	},
	{
		"comuna": "PINTO",
		"circunscripcion": "PINTO",
		"direccion": "AVENIDA JOSÉ MANUEL BALMACEDA ESQ. ERNESTO RIQUELME"
	},
	{
		"comuna": "PINTO",
		"circunscripcion": "RECINTO",
		"direccion": "AVENIDA JAVIER JARPA SOTOMAYOR Nº 51 RECINTO"
	},
	{
		"comuna": "PORTEZUELO",
		"circunscripcion": "PORTEZUELO",
		"direccion": "SAN MARTÍN 386, PORTEZUELO"
	},
	{
		"comuna": "QUILLON",
		"circunscripcion": "CERRO NEGRO",
		"direccion": "CERRO NEGRO, KM 12 S/N"
	},
	{
		"comuna": "QUILLON",
		"circunscripcion": "QUILLON",
		"direccion": "ARTURO PRAT 410"
	},
	{
		"comuna": "QUIRIHUE",
		"circunscripcion": "QUIRIHUE",
		"direccion": "BLANCO ENCALADA 281, QUIRIHUE."
	},
	{
		"comuna": "RANQUIL",
		"circunscripcion": "RANQUIL (ÑIPAS)",
		"direccion": "CASA DE LA CULTURA"
	},
	{
		"comuna": "SAN CARLOS",
		"circunscripcion": "CACHAPOAL",
		"direccion": "KM. 22 CAMINO A SAN FABIAN. S/N"
	},
	{
		"comuna": "SAN CARLOS",
		"circunscripcion": "SAN CARLOS",
		"direccion": "AV. ARTURO PRAT CHACÓN #279"
	},
	{
		"comuna": "SAN FABIAN",
		"circunscripcion": "SAN FABIAN",
		"direccion": "CAUPOLICÁN 325"
	},
	{
		"comuna": "SAN IGNACIO",
		"circunscripcion": "PUEBLO SECO",
		"direccion": "LOS NOTROS, PUEBLO SECO 621"
	},
	{
		"comuna": "SAN IGNACIO",
		"circunscripcion": "SAN IGNACIO",
		"direccion": "LICEO DE SAN IGNACIO"
	},
	{
		"comuna": "SAN NICOLAS",
		"circunscripcion": "PUENTE ÑUBLE",
		"direccion": "PANAMERICANA SUR, KM 394"
	},
	{
		"comuna": "SAN NICOLAS",
		"circunscripcion": "SAN NICOLAS",
		"direccion": "COSTADO DE GIMNASIO MUNICIPAL"
	},
	{
		"comuna": "TREHUACO",
		"circunscripcion": "TREGUACO",
		"direccion": "URREJOLA 822"
	},
	{
		"comuna": "YUNGAY",
		"circunscripcion": "CAMPANARIO",
		"direccion": "CALLE CRUZ DEL CIPRÉS S/N"
	},
	{
		"comuna": "YUNGAY",
		"circunscripcion": "YUNGAY",
		"direccion": "ANGAMOS 375, YUNGAY"
	}
];

// Boolean entity groups

export const vaccinated = createBooleanEntityGroup("¿Estás vacunado?");
export const mobilityPass = createBooleanEntityGroup("¿Tienes pase de movilidad?");
export const allVaccinated = createBooleanEntityGroup("¿Están todos los asistentes vacunados?");
export const interaction = createBooleanEntityGroup("¿Habrá interacción con el público?");
export const openSpace = createBooleanEntityGroup("¿Es un espacio abierto?");
export const booleanGroup = createBooleanEntityGroup("NO QUESTION");
