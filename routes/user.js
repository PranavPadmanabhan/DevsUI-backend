const User = require("../models/User");
const controller = require("../controllers/controllers")
const router = require("express").Router();

router.post("/new", controller.createUser);

router.post("/update",controller.updateUser)

router.get("/user",controller.getUser)

module.exports = router;
