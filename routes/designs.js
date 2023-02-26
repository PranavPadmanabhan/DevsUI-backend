const controller = require("../controllers/controllers");
const router = require("express").Router();

router.post("/new", controller.createDesign);

router.get("/design",controller.getDesign)

router.get("/",controller.getDesigns)


module.exports = router;