var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main')
const ctrlFood = require('../controllers/food')
/* GET home page. */

router.get('/', ctrlMain.index);
router.get('/favourite', ctrlFood.favouriteFood);
router.get('/list', ctrlFood.foodList);

module.exports = router;
