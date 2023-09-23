const path = require("path");
const express = require("express");

const userController = require("../controllers/user");
const router = express.Router();

router.get("/get-users", userController.getUser);
router.post("/add-user", userController.addUser);
router.delete("/delete-user/:id", userController.deleteUser);

module.exports = router;
