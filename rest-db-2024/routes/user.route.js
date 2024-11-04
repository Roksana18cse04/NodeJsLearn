const express = require("express");
const router = express.Router();

const { getAllUser, getOneUser } = require("../controller/user.controller");

router.get("/",getAllUser);
router.get("/:id",getOneUser);


module.exports = router;