const request = require("supertest");

const ___ = (app) => {
	request(app)
		.get("/")
		.expect(200)
		.end(function (err, res) {
			if (err) throw err;
			if (!err) {
				console.log("GET API - fetch photos test passed");
			}
		});
};

const ___ = (app) => {
	request(app)
		.post("/")
		.send({})
		.expect(200)
		.end(function (err, res) {
			if (err) throw err;
			if (!err) {
				console.log("POST API - save photos test passed");
			}
		});
};

module.exports = {};
