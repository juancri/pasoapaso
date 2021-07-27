
// Dependencies

import { Comuna, EntityGroup, Region } from './types';
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
		curfew: { start: '22:00', end: '05:00' },
		next: {
			date: "2021-07-28",
			curfew: { start: '00:00', end: '05:00' },
		}
	},
	{
		id: 4,
		name: 'Coquimbo',
		longName: 'Región de Coquimbo',
		curfew: { start: '22:00', end: '05:00' },
		next: {
			date: "2021-07-28",
			curfew: { start: '00:00', end: '05:00' },
		}
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
			"phase": 3,
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
			"phase": 2,
			"region": 8,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
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
			"region": 3,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Ancud",
			"phase": 3,
			"region": 10,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Andacollo",
			"phase": 3,
			"region": 4,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
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
			"phase": 2,
			"region": 8
		},
		{
			"name": "Arica",
			"phase": 3,
			"region": 15
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
			"phase": 3,
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
			"region": 8
		},
		{
			"name": "Calama",
			"phase": 3,
			"region": 2,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Calbuco",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Caldera",
			"phase": 3,
			"region": 3
		},
		{
			"name": "Calera",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Calera de Tango",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Calle Larga",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Camarones",
			"phase": 4,
			"region": 15
		},
		{
			"name": "Camiña",
			"phase": 3,
			"region": 1
		},
		{
			"name": "Canela",
			"phase": 3,
			"region": 4
		},
		{
			"name": "Carahue",
			"phase": 2,
			"region": 9,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Cartagena",
			"phase": 2,
			"region": 5
		},
		{
			"name": "Casablanca",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Castro",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Catemu",
			"phase": 2,
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
			"phase": 3,
			"region": 7
		},
		{
			"name": "Chañaral",
			"phase": 2,
			"region": 3
		},
		{
			"name": "Chiguayante",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Chile Chico",
			"phase": 3,
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
			"region": 9
		},
		{
			"name": "Chonchi",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Chépica",
			"phase": 3,
			"region": 6
		},
		{
			"name": "Cisnes",
			"phase": 3,
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
			"phase": 3,
			"region": 11
		},
		{
			"name": "Codegua",
			"phase": 3,
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
			"region": 16,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Coinco",
			"phase": 3,
			"region": 6
		},
		{
			"name": "Colbún",
			"phase": 2,
			"region": 7,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
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
			"phase": 2,
			"region": 9,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Coltauco",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Combarbalá",
			"phase": 2,
			"region": 4
		},
		{
			"name": "Concepción",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Conchalí",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Concón",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Constitución",
			"phase": 2,
			"region": 7,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
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
			"region": 3,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Coquimbo",
			"phase": 3,
			"region": 4,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Coronel",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Corral",
			"phase": 2,
			"region": 14
		},
		{
			"name": "Coyhaique",
			"phase": 3,
			"region": 11
		},
		{
			"name": "Cunco",
			"phase": 3,
			"region": 9,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Curacautín",
			"phase": 2,
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
			"region": 7,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Curicó",
			"phase": 4,
			"region": 7
		},
		{
			"name": "Dalcahue",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Diego de Almagro",
			"phase": 2,
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
			"region": 16,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
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
			"phase": 2,
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
			"phase": 2,
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
			"region": 3
		},
		{
			"name": "Fresia",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Frutillar",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Futaleufú",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Futrono",
			"phase": 1,
			"region": 14
		},
		{
			"name": "Galvarino",
			"phase": 2,
			"region": 9
		},
		{
			"name": "General Lagos",
			"phase": 4,
			"region": 15
		},
		{
			"name": "Gorbea",
			"phase": 2,
			"region": 9,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Graneros",
			"phase": 3,
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
			"region": 5,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
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
			"phase": 3,
			"region": 8
		},
		{
			"name": "Hualqui",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Huara",
			"phase": 2,
			"region": 1,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Huasco",
			"phase": 3,
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
			"region": 4,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Independencia",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Iquique",
			"phase": 3,
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
			"region": 5
		},
		{
			"name": "La Estrella",
			"phase": 3,
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
			"region": 4
		},
		{
			"name": "La Ligua",
			"phase": 2,
			"region": 5,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
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
			"region": 4,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "La Unión",
			"phase": 3,
			"region": 14
		},
		{
			"name": "Lago Ranco",
			"phase": 1,
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
			"region": 8
		},
		{
			"name": "Lampa",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Lanco",
			"phase": 2,
			"region": 14
		},
		{
			"name": "Las Cabras",
			"phase": 3,
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
			"region": 9
		},
		{
			"name": "Lebu",
			"phase": 2,
			"region": 8
		},
		{
			"name": "Licantén",
			"phase": 2,
			"region": 7,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Limache",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Linares",
			"phase": 3,
			"region": 7
		},
		{
			"name": "Litueche",
			"phase": 3,
			"region": 6
		},
		{
			"name": "Llaillay",
			"phase": 2,
			"region": 5
		},
		{
			"name": "Llanquihue",
			"phase": 3,
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
			"region": 9
		},
		{
			"name": "Longaví",
			"phase": 3,
			"region": 7
		},
		{
			"name": "Lonquimay",
			"phase": 1,
			"region": 9
		},
		{
			"name": "Los Andes",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Los Lagos",
			"phase": 1,
			"region": 14,
			"next":
			{
				"phase": 2,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Los Muermos",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Los Sauces",
			"phase": 2,
			"region": 9,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Los Vilos",
			"phase": 4,
			"region": 4
		},
		{
			"name": "Los Álamos",
			"phase": 2,
			"region": 8,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Los Ángeles",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Lota",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Lumaco",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Machalí",
			"phase": 3,
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
			"region": 6,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
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
			"region": 2,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "María Pinto",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Maule",
			"phase": 3,
			"region": 7,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
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
			"phase": 2,
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
			"region": 7,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Monte Patria",
			"phase": 3,
			"region": 4
		},
		{
			"name": "Mostazal",
			"phase": 3,
			"region": 6
		},
		{
			"name": "Mulchén",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Máfil",
			"phase": 2,
			"region": 14,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
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
			"phase": 3,
			"region": 6
		},
		{
			"name": "Negrete",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Ninhue",
			"phase": 3,
			"region": 16
		},
		{
			"name": "Nogales",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Nueva Imperial",
			"phase": 3,
			"region": 9
		},
		{
			"name": "O'Higgins",
			"phase": 4,
			"region": 11
		},
		{
			"name": "Olivar",
			"phase": 3,
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
			"region": 10
		},
		{
			"name": "Ovalle",
			"phase": 3,
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
				"phase": 2,
				"date": "2021-07-28"
			}
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
			"phase": 1,
			"region": 14
		},
		{
			"name": "Panquehue",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Papudo",
			"phase": 2,
			"region": 5,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Paredones",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Parral",
			"phase": 3,
			"region": 7
		},
		{
			"name": "Pedro Aguirre Cerda",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Pelarco",
			"phase": 3,
			"region": 7,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Pelluhue",
			"phase": 2,
			"region": 7
		},
		{
			"name": "Pemuco",
			"phase": 3,
			"region": 16,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Pencahue",
			"phase": 3,
			"region": 7,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Penco",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Peralillo",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Perquenco",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Petorca",
			"phase": 2,
			"region": 5
		},
		{
			"name": "Peumo",
			"phase": 3,
			"region": 6,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
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
			"phase": 3,
			"region": 1
		},
		{
			"name": "Pichidegua",
			"phase": 3,
			"region": 6
		},
		{
			"name": "Pichilemu",
			"phase": 3,
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
			"phase": 3,
			"region": 9
		},
		{
			"name": "Placilla",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Portezuelo",
			"phase": 3,
			"region": 16,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Porvenir",
			"phase": 3,
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
			"phase": 3,
			"region": 5
		},
		{
			"name": "Pucón",
			"phase": 2,
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
			"phase": 3,
			"region": 10
		},
		{
			"name": "Pumanque",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Punitaqui",
			"phase": 3,
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
			"region": 10,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Purranque",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Purén",
			"phase": 2,
			"region": 9
		},
		{
			"name": "Putaendo",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Putre",
			"phase": 4,
			"region": 15
		},
		{
			"name": "Puyehue",
			"phase": 2,
			"region": 10,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Queilén",
			"phase": 2,
			"region": 10
		},
		{
			"name": "Quellón",
			"phase": 3,
			"region": 10
		},
		{
			"name": "Quemchi",
			"phase": 3,
			"region": 10,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Quilaco",
			"phase": 2,
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
			"region": 8
		},
		{
			"name": "Quillota",
			"phase": 3,
			"region": 5,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Quillón",
			"phase": 3,
			"region": 16
		},
		{
			"name": "Quilpué",
			"phase": 3,
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
			"phase": 3,
			"region": 6
		},
		{
			"name": "Rauco",
			"phase": 3,
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
			"region": 6,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Requínoa",
			"phase": 4,
			"region": 6
		},
		{
			"name": "Retiro",
			"phase": 2,
			"region": 7,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Rinconada",
			"phase": 2,
			"region": 5,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Romeral",
			"phase": 3,
			"region": 7,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Ránquil",
			"phase": 4,
			"region": 16
		},
		{
			"name": "Río Bueno",
			"phase": 2,
			"region": 14,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Río Claro",
			"phase": 2,
			"region": 7
		},
		{
			"name": "Río Hurtado",
			"phase": 3,
			"region": 4,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Río Ibáñez",
			"phase": 3,
			"region": 11,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Río Negro",
			"phase": 2,
			"region": 10
		},
		{
			"name": "Río Verde",
			"phase": 4,
			"region": 12
		},
		{
			"name": "Saavedra",
			"phase": 2,
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
			"region": 4,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
		},
		{
			"name": "San Antonio",
			"phase": 2,
			"region": 5,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
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
			"phase": 3,
			"region": 5
		},
		{
			"name": "San Fabián",
			"phase": 3,
			"region": 16
		},
		{
			"name": "San Felipe",
			"phase": 3,
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
			"phase": 3,
			"region": 16
		},
		{
			"name": "San Javier",
			"phase": 3,
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
			"region": 10,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "San Miguel",
			"phase": 3,
			"region": 13
		},
		{
			"name": "San Nicolás",
			"phase": 3,
			"region": 16
		},
		{
			"name": "San Pablo",
			"phase": 3,
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
			"region": 2
		},
		{
			"name": "San Pedro de la Paz",
			"phase": 3,
			"region": 8
		},
		{
			"name": "San Rafael",
			"phase": 2,
			"region": 7
		},
		{
			"name": "San Ramón",
			"phase": 3,
			"region": 13
		},
		{
			"name": "San Rosendo",
			"phase": 2,
			"region": 8,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
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
			"phase": 2,
			"region": 8
		},
		{
			"name": "Santa Maria",
			"phase": 2,
			"region": 5,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Santiago",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Santo Domingo",
			"phase": 2,
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
			"region": 8
		},
		{
			"name": "Taltal",
			"phase": 3,
			"region": 2
		},
		{
			"name": "Temuco",
			"phase": 3,
			"region": 9
		},
		{
			"name": "Teno",
			"phase": 2,
			"region": 7,
			"next":
			{
				"phase": 3,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Teodoro Schmidt",
			"phase": 1,
			"region": 9
		},
		{
			"name": "Tierra Amarilla",
			"phase": 1,
			"region": 3
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
			"phase": 1,
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
			"region": 9,
			"next":
			{
				"phase": 2,
				"date": "2021-07-28"
			}
		},
		{
			"name": "Tomé",
			"phase": 3,
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
			"phase": 3,
			"region": 3
		},
		{
			"name": "Valparaiso",
			"phase": 3,
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
			"phase": 2,
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
			"region": 7
		},
		{
			"name": "Villa Alemana",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Villarrica",
			"phase": 2,
			"region": 9
		},
		{
			"name": "Vitacura",
			"phase": 3,
			"region": 13
		},
		{
			"name": "Viña del Mar",
			"phase": 3,
			"region": 5
		},
		{
			"name": "Yerbas Buenas",
			"phase": 3,
			"region": 7
		},
		{
			"name": "Yumbel",
			"phase": 3,
			"region": 8
		},
		{
			"name": "Yungay",
			"phase": 3,
			"region": 16,
			"next":
			{
				"phase": 4,
				"date": "2021-07-28"
			}
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

// Boolean entity groups

export const vaccinated = createBooleanEntityGroup("¿Estás vacunado?");
export const mobilityPass = createBooleanEntityGroup("¿Tienes pase de movilidad?");
export const allVaccinated = createBooleanEntityGroup("¿Están todos los asistentes vacunados?");
export const interaction = createBooleanEntityGroup("¿Habrá interacción con el público?");
export const openSpace = createBooleanEntityGroup("¿Es un espacio abierto?");
export const booleanGroup = createBooleanEntityGroup("NO QUESTION");
