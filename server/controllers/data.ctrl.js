module.exports = {
	getTestData: (req, res, next) => {
		const data = [
			{year:1800, temp:0.0},
			{year:2018, temp:0.6},
			{year:2100, temp:1.5}
		];
		res.send(data);
	}
}
