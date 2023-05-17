const express = require('express');
const router = express.Router();
const indexController = require("../controllers/index");

/* GET home page. */
router.get('/',indexController.index_get);
router.post('/', indexController.index_get);

module.exports = router;
