const fetch = require('node-fetch');

module.exports = {
	getResults: async (req, res) => {
		const rollNums = req.body;
		try {
			let results = [];
			let urls = [];

			for (let i = 0; i < rollNums.length; i++) {
				urls.push(`http://proedge.me/test.php?rollnumber=${Number(rollNums[i])}`);
			}

			Promise.all(urls.map((u) => fetch(u)))
				.then((res) => Promise.all(res.map((res) => res.text())))
				.then((texts) => {
					for (let i = 0; i < rollNums.length; i++) {
						results.push({
							rollNumber: rollNums[i],
							result: texts[i]
						});
					}
					res.status(200).json({ results });
				});
		} catch (err) {
			//console.log(err);
			res.status(400).json({ err: err.message });
		}
	}
};
