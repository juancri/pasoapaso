
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
const VALID_ZONAS = ['Urbana', 'Total'];
const TODAY = luxon.DateTime.local().toISODate();

(async() => {
	// Download file
	const response = await axios(AXIOS_PARAMS);

	// Load CSV
	const data = await csv().fromStream(response.data);

	// Filter
	const filtered = data.filter(x => VALID_ZONAS.includes(x['zona']));

	// Convert to comuna format
	const formatted = filtered.map(x => ({
		name: x.comuna_residencia,
		phase: getPhase(x),
		region: parseInt(x.codigo_region)
	}));

	// Sort
	const sorted = Enumerable
		.from(formatted)
		.orderBy(x => x.name)
		.toArray();

	console.log(JSON.stringify(sorted, null, ' '));
})();

