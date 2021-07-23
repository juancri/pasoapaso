
// Dependencies
const axios = require('axios');
const csv = require('csvtojson');
const luxon = require('luxon');
const Enumerable = require('linq');

// Functions

function getPhase(x)
{
	const keys = Object.keys(x);
	const lastKey = keys[keys.length - 1];
	return parseInt(x[TODAY] || x[lastKey]);
}

// Constants
const URL = 'https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto74/paso_a_paso.csv';
const AXIOS_PARAMS = { url: URL, method: 'get', responseType: 'stream' };
const PRIORITY_ZONES = ['Total', 'Urbana'];
const TODAY = luxon.DateTime.local().toISODate();

function findByZone(group)
{
	// Priorities
	for (const priority of PRIORITY_ZONES)
	{
		const found = group.firstOrDefault(x => x.zona === priority);
		if (found)
			return found;
	}

	// Default
	return group.firstOrDefault();
}

(async() => {
	// Download file
	const response = await axios(AXIOS_PARAMS);

	// Load CSV
	const data = await csv().fromStream(response.data);

	// group
	const comunas = Enumerable
		.from(data)
		.groupBy(x => x.comuna_residencia)
		.select(g => {
			const selected = findByZone(g);
			return {
				name: g.key(),
				phase: getPhase(selected),
				region: parseInt(selected.codigo_region)
			};
		})
		.orderBy(x => x.name)
		.toArray();

	console.log(JSON.stringify(comunas, null, ' '));
})();

