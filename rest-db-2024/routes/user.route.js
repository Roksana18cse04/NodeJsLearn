const express = require("express");
const router = express.Router();

const { getAllUser, createUser, getOneUser, deleteUser, updateUser } = require("../controller/user.controller");

router.get("/",getAllUser);
router.post("/",createUser);
router.get("/:id",getOneUser);
router.delete("/:id",deleteUser);
router.patch("/:id",updateUser)

module.exports = router;