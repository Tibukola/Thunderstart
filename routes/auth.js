const express = require('express');
const router = express.Router();
const authController = require("../controllers/auth");

/* GET home page. */
router.post('/signup', authController.signup);

module.exports = router;