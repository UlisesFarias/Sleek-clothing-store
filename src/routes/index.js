var express = require('express');
const { index,detail } = require('../controllers/indexController');
const router = express.Router();

/* GET home page. */
router
.get('/',index)



module.exports = router;
