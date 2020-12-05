const fetch = require('node-fetch');

module.exports = {
	getResults: async (req, res) => {
		const rollNums = req.body;
		try {
			let results = [];
			for (let i = 0; i < rollNums.length; i++) {
				const data = await fetch(`http://proedge.me/test.php?rollnumber=${Number(rollNums[i])}`);
				const data1 = await data.text();
				results.push({
					rollNumber: rollNums[i],
					result: data1
				});
			}
			res.status(200).json({ results });
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}
};
