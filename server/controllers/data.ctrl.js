const parse = require('csv-parse/lib/sync')

var fs = require('fs');

module.exports = {
	getTestData: (req, res, next) => {
		const contents = fs.readFileSync('./data/GlobalTemperature.csv', 'utf8');
		const parsedContents = parse(contents, {delimiter: ','});
		console.log(parsedContents)
		const data = parsedContents.map((entry) => { return {year:entry[0], temp:entry[1]}; });
		console.log(data);
		res.send(data);
	}
}
