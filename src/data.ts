
// Dependencies

import { Comuna, EntityGroup, Region, VaccinationDate } from './types';
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
		curfew: { start: '22:00', end: '05:00' }
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
			"name": "Aisén",
			"phase": 4,
			"region": 11
		},
		{
			"name": "Algarrobo",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Alhué",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Alto Biobío",
			"phase": 3,
			"region": 8,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Alto Hospicio",
			"phase": 3,
			"region": 1
		},
		{
			"name": "Alto del Carmen",
			"phase": 3,
			"region": 3
		},
		{
			"name": "Ancud",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Andacollo",
			"phase": 3,
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
			"phase": 3,
			"region": 8
		},
		{
			"name": "Arica",
			"phase": 3,
			"region": 15,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
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
			"phase": 3,
			"region": 8,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Calama",
			"phase": 3,
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
			"name": "Calera",
			"phase": 3,
			"region": 5,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
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
			"phase": 3,
			"region": 9,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Cartagena",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Casablanca",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Castro",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Catemu",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Cauquenes",
			"phase": 3,
			"region": 7
		},
		{
			"name": "Cañete",
			"phase": 3,
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
			"phase": 3,
			"region": 3
		},
		{
			"name": "Chiguayante",
			"phase": 3,
			"region": 8,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
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
			"phase": 3,
			"region": 9,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Chonchi",
			"phase": 3,
			"region": 10,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
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
			"phase": 3,
			"region": 16
		},
		{
			"name": "Coinco",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Colbún",
			"phase": 2,
			"region": 7,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
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
			"phase": 3,
			"region": 9,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Coltauco",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Combarbalá",
			"phase": 3,
			"region": 4
		},
		{
			"name": "Concepción",
			"phase": 3,
			"region": 8,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
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
			"phase": 3,
			"region": 7,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Contulmo",
			"phase": 2,
			"region": 8
		},
		{
			"name": "Copiapó",
			"phase": 2,
			"region": 3
		},
		{
			"name": "Coquimbo",
			"phase": 3,
			"region": 4
		},
		{
			"name": "Coronel",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Corral",
			"phase": 2,
			"region": 14,
			"next":
			{
				"date": "2021-08-11",
				"phase": 3
			}
		},
		{
			"name": "Coyhaique",
			"phase": 4,
			"region": 11
		},
		{
			"name": "Cunco",
			"phase": 4,
			"region": 9,
			"next":
			{
				"date": "2021-08-11",
				"phase": 3
			}
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
			"phase": 3,
			"region": 8
		},
		{
			"name": "Curarrehue",
			"phase": 2,
			"region": 9
		},
		{
			"name": "Curepto",
			"phase": 3,
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
			"phase": 3,
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
			"phase": 3,
			"region": 16
		},
		{
			"name": "El Monte",
			"phase": 3,
			"region": 13
		},
		{
			"name": "El Quisco",
			"phase": 3,
			"region": 5
		},
		{
			"name": "El Tabo",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Empedrado",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Ercilla",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Estación Central",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Florida",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Freire",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Freirina",
			"phase": 3,
			"region": 3,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Fresia",
			"phase": 3,
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
			"phase": 2,
			"region": 14
		},
		{
			"name": "Galvarino",
			"phase": 3,
			"region": 9
		},
		{
			"name": "General Lagos",
			"phase": 4,
			"region": 15
		},
		{
			"name": "Gorbea",
			"phase": 3,
			"region": 9,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
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
			"phase": 3,
			"region": 5
		},
		{
			"name": "Hualaihué",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Hualañé",
			"phase": 3,
			"region": 7
		},
		{
			"name": "Hualpén",
			"phase": 3,
			"region": 8,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Hualqui",
			"phase": 3,
			"region": 8,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Huara",
			"phase": 2,
			"region": 1,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
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
			"phase": 2,
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
			"name": "La Cisterna",
			"phase": 3,
			"region": 13
		},
		{
			"name": "La Cruz",
			"phase": 3,
			"region": 5,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
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
			"phase": 3,
			"region": 4,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "La Ligua",
			"phase": 2,
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
			"phase": 3,
			"region": 4
		},
		{
			"name": "La Unión",
			"phase": 3,
			"region": 14
		},
		{
			"name": "Lago Ranco",
			"phase": 2,
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
			"phase": 3,
			"region": 8,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
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
			"phase": 3,
			"region": 9,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Lebu",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Licantén",
			"phase": 2,
			"region": 7
		},
		{
			"name": "Limache",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Linares",
			"phase": 3,
			"region": 7,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Litueche",
			"phase": 3,
			"region": 6,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Llaillay",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Llanquihue",
			"phase": 2,
			"region": 10
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
			"phase": 2,
			"region": 9,
			"next":
			{
				"date": "2021-08-11",
				"phase": 3
			}
		},
		{
			"name": "Longaví",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Lonquimay",
			"phase": 2,
			"region": 9
		},
		{
			"name": "Los Andes",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Los Lagos",
			"phase": 1,
			"region": 14,
			"next":
			{
				"date": "2021-08-11",
				"phase": 3
			}
		},
		{
			"name": "Los Muermos",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Los Sauces",
			"phase": 2,
			"region": 9
		},
		{
			"name": "Los Vilos",
			"phase": 4,
			"region": 4
		},
		{
			"name": "Los Álamos",
			"phase": 2,
			"region": 8
		},
		{
			"name": "Los Ángeles",
			"phase": 4,
			"region": 8
		},
		{
			"name": "Lota",
			"phase": 3,
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
			"phase": 3,
			"region": 6
		},
		{
			"name": "Marchihue",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Mariquina",
			"phase": 3,
			"region": 14
		},
		{
			"name": "María Elena",
			"phase": 3,
			"region": 2
		},
		{
			"name": "María Pinto",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Maule",
			"phase": 3,
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
			"phase": 3,
			"region": 9
		},
		{
			"name": "Melipilla",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Molina",
			"phase": 3,
			"region": 7
		},
		{
			"name": "Monte Patria",
			"phase": 3,
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
			"phase": 2,
			"region": 14
		},
		{
			"name": "Nacimiento",
			"phase": 3,
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
			"phase": 3,
			"region": 8
		},
		{
			"name": "Ninhue",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Nogales",
			"phase": 3,
			"region": 5,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
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
			"phase": 3,
			"region": 10,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
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
			"phase": 3,
			"region": 9
		},
		{
			"name": "Paiguano",
			"phase": 2,
			"region": 4
		},
		{
			"name": "Paillaco",
			"phase": 1,
			"region": 14,
			"next":
			{
				"date": "2021-08-11",
				"phase": 3
			}
		},
		{
			"name": "Paine",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Palena",
			"phase": 2,
			"region": 10
		},
		{
			"name": "Palmilla",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Panguipulli",
			"phase": 1,
			"region": 14
		},
		{
			"name": "Panquehue",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Papudo",
			"phase": 2,
			"region": 5
		},
		{
			"name": "Paredones",
			"phase": 4,
			"region": 6,
			"next":
			{
				"date": "2021-08-11",
				"phase": 3
			}
		},
		{
			"name": "Parral",
			"phase": 3,
			"region": 7,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Pedro Aguirre Cerda",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Pelarco",
			"phase": 4,
			"region": 7,
			"next":
			{
				"date": "2021-08-11",
				"phase": 3
			}
		},
		{
			"name": "Pelluhue",
			"phase": 3,
			"region": 7
		},
		{
			"name": "Pemuco",
			"phase": 3,
			"region": 16
		},
		{
			"name": "Pencahue",
			"phase": 3,
			"region": 7
		},
		{
			"name": "Penco",
			"phase": 3,
			"region": 8,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Peralillo",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Perquenco",
			"phase": 3,
			"region": 9,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Petorca",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Peumo",
			"phase": 3,
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
			"phase": 3,
			"region": 6,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
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
			"phase": 3,
			"region": 9,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Placilla",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Portezuelo",
			"phase": 3,
			"region": 16
		},
		{
			"name": "Porvenir",
			"phase": 4,
			"region": 12
		},
		{
			"name": "Pozo Almonte",
			"phase": 4,
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
			"phase": 3,
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
			"phase": 4,
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
			"phase": 3,
			"region": 10,
			"next":
			{
				"date": "2021-08-11",
				"phase": 2
			}
		},
		{
			"name": "Purranque",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Purén",
			"phase": 3,
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
			"phase": 3,
			"region": 10,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Queilén",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Quellón",
			"phase": 4,
			"region": 10
		},
		{
			"name": "Quemchi",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Quilaco",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Quilicura",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Quilleco",
			"phase": 3,
			"region": 8,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Quillota",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Quillón",
			"phase": 3,
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
			"phase": 3,
			"region": 6
		},
		{
			"name": "Requínoa",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Retiro",
			"phase": 3,
			"region": 7,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Rinconada",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Romeral",
			"phase": 3,
			"region": 7
		},
		{
			"name": "Ránquil",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Río Bueno",
			"phase": 2,
			"region": 14
		},
		{
			"name": "Río Claro",
			"phase": 3,
			"region": 7
		},
		{
			"name": "Río Hurtado",
			"phase": 3,
			"region": 4
		},
		{
			"name": "Río Ibáñez",
			"phase": 3,
			"region": 11
		},
		{
			"name": "Río Negro",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Río Verde",
			"phase": 4,
			"region": 12
		},
		{
			"name": "Saavedra",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Sagrada Familia",
			"phase": 3,
			"region": 7
		},
		{
			"name": "Salamanca",
			"phase": 3,
			"region": 4
		},
		{
			"name": "San Antonio",
			"phase": 2,
			"region": 5
		},
		{
			"name": "San Bernardo",
			"phase": 3,
			"region": 13
		},
		{
			"name": "San Carlos",
			"phase": 3,
			"region": 16
		},
		{
			"name": "San Clemente",
			"phase": 3,
			"region": 7
		},
		{
			"name": "San Esteban",
			"phase": 4,
			"region": 5
		},
		{
			"name": "San Fabián",
			"phase": 3,
			"region": 16,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
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
			"phase": 2,
			"region": 10
		},
		{
			"name": "San Miguel",
			"phase": 3,
			"region": 13
		},
		{
			"name": "San Nicolás",
			"phase": 3,
			"region": 16,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "San Pablo",
			"phase": 4,
			"region": 10
		},
		{
			"name": "San Pedro",
			"phase": 3,
			"region": 13
		},
		{
			"name": "San Pedro de Atacama",
			"phase": 2,
			"region": 2,
			"next":
			{
				"date": "2021-08-11",
				"phase": 3
			}
		},
		{
			"name": "San Pedro de la Paz",
			"phase": 3,
			"region": 8,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "San Rafael",
			"phase": 3,
			"region": 7
		},
		{
			"name": "San Ramón",
			"phase": 3,
			"region": 13
		},
		{
			"name": "San Rosendo",
			"phase": 3,
			"region": 8,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
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
			"phase": 3,
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
			"phase": 3,
			"region": 7
		},
		{
			"name": "Talcahuano",
			"phase": 3,
			"region": 8,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Taltal",
			"phase": 4,
			"region": 2
		},
		{
			"name": "Temuco",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Teno",
			"phase": 3,
			"region": 7,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Teodoro Schmidt",
			"phase": 2,
			"region": 9
		},
		{
			"name": "Tierra Amarilla",
			"phase": 2,
			"region": 3,
			"next":
			{
				"date": "2021-08-11",
				"phase": 3
			}
		},
		{
			"name": "Tiltil",
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
			"phase": 1,
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
			"name": "Treguaco",
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
			"phase": 4,
			"region": 7
		},
		{
			"name": "Victoria",
			"phase": 4,
			"region": 9
		},
		{
			"name": "Vicuña",
			"phase": 3,
			"region": 4
		},
		{
			"name": "Vilcún",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Villa Alegre",
			"phase": 3,
			"region": 7,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Villa Alemana",
			"phase": 4,
			"region": 5
		},
		{
			"name": "Villarrica",
			"phase": 3,
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
			"phase": 3,
			"region": 7,
			"next":
			{
				"date": "2021-08-11",
				"phase": 4
			}
		},
		{
			"name": "Yumbel",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Yungay",
			"phase": 3,
			"region": 16
		},
		{
			"name": "Zapallar",
			"phase": 3,
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
	// Martes 10 de agosto
	{
		name: 'Segunda dosis a población vacunada con Sinovac',
		date: '2021-08-10',
		dose: 2,
		kind: 'Sinovac',
		daysAfterPreviousDose: 28
	},
	{
		name: 'Primera dosis rezagados desde los 18 años con Sinovac',
		date: '2021-08-10',
		dose: 1,
		minAge: 18
	},
	// Miércoles 11 de agosto
	{
		name: 'Segunda dosis a población vacunada entre el 5 y 11 de julio',
		date: '2021-08-11',
		dose: 2,
		previousDoseMinDate: '2021-07-05',
		previousDoseMaxDate: '2021-07-11'
	},
	{
		name: 'Dosis de resfuerzo para personas de 86 o más años',
		date: '2021-08-11',
		dose: 3,
		minAge: 86,
		kind: 'Sinovac',
		previousDoseMinDate: '2021-03-01',
		previousDoseMaxDate: '2021-03-14'
	},
	// Jueves 12 de agosto
	{
		name: 'Dosis de resfuerzo para personas entre 82 y 85 años',
		date: '2021-08-12',
		dose: 3,
		minAge: 82,
		maxAge: 85,
		kind: 'Sinovac',
		previousDoseMinDate: '2021-03-01',
		previousDoseMaxDate: '2021-03-14'
	},
	// Viernes 13 de agosto
	{
		name: 'Dosis de resfuerzo para personas entre 79 y 81 años',
		date: '2021-08-13',
		dose: 3,
		minAge: 79,
		maxAge: 81,
		kind: 'Sinovac',
		previousDoseMinDate: '2021-03-01',
		previousDoseMaxDate: '2021-03-14'
	},
	// Lunes 16 de agosto
	{
		name: 'Dosis de resfuerzo para personas entre 75 y 78 años',
		date: '2021-08-16',
		dose: 3,
		minAge: 75,
		maxAge: 78,
		kind: 'Sinovac',
		previousDoseMinDate: '2021-03-01',
		previousDoseMaxDate: '2021-03-14'
	},
	// Martes 17 de agosto
	{
		name: 'Dosis de resfuerzo para personas entre 72 y 74 años',
		date: '2021-08-17',
		dose: 3,
		minAge: 72,
		maxAge: 74,
		kind: 'Sinovac',
		previousDoseMinDate: '2021-03-01',
		previousDoseMaxDate: '2021-03-14'
	},
	// Miércoles 18 de agosto
	{
		name: 'Dosis de resfuerzo para personas entre 70 y 71 años',
		date: '2021-08-18',
		dose: 3,
		minAge: 70,
		maxAge: 71,
		kind: 'Sinovac',
		previousDoseMinDate: '2021-03-01',
		previousDoseMaxDate: '2021-03-14'
	},
	// Jueves 19 de agosto
	{
		name: 'Dosis de resfuerzo para personas entre 64 y 69 años',
		date: '2021-08-19',
		dose: 3,
		minAge: 64,
		maxAge: 69,
		kind: 'Sinovac',
		previousDoseMinDate: '2021-03-01',
		previousDoseMaxDate: '2021-03-14'
	},
	// Viernes 20 de agosto
	{
		name: 'Dosis de resfuerzo para personas entre 55 y 63 años',
		date: '2021-08-20',
		dose: 3,
		minAge: 55,
		maxAge: 63,
		kind: 'Sinovac',
		previousDoseMinDate: '2021-03-01',
		previousDoseMaxDate: '2021-03-14'
	},
];

// Boolean entity groups

export const vaccinated = createBooleanEntityGroup("¿Estás vacunado?");
export const mobilityPass = createBooleanEntityGroup("¿Tienes pase de movilidad?");
export const allVaccinated = createBooleanEntityGroup("¿Están todos los asistentes vacunados?");
export const interaction = createBooleanEntityGroup("¿Habrá interacción con el público?");
export const openSpace = createBooleanEntityGroup("¿Es un espacio abierto?");
export const booleanGroup = createBooleanEntityGroup("NO QUESTION");
