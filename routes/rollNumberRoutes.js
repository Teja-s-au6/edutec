const { Router } = require("express");
const router = Router()
const {getResults} = require("../controller/rollNumberController");

router.post('/getresults', getResults);

module.exports = router;
