const express = require("express");
const router = express.Router();
const {getUsers, saveUsers} = require("../controller/user.controller");

router.get("/users",getUsers);
router.post("/users",saveUsers);

module.exports = router;