const controller = require("../controllers/controllers");
const router = require("express").Router();

router.post("/new", controller.createDesign);


module.exports = router;