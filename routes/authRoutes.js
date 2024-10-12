const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/authController");

// Register a new user
router.post("/register", register);

// Login user
router.post("/login", login);

// Logout user
router.get("/logout", logout);

module.exports = router;
