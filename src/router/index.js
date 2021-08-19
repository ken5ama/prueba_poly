const book = require('./bookRouter')
const restaurant = require('./restaurantRouter')
const router =require('express').Router()

router.use('/',book)
router.use('/',restaurant)

module.exports = router