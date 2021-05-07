const router = require("express").Router();

router.get("/test", (req, res) => {
	res.send("Works");
});

module.exports = router;
