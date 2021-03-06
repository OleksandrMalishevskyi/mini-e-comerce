const express = require('express')
const controller = require('../controllers/order')
const router = express.Router()

router.post('/', controller.getOrdersAll)
router.get('/:id', controller.getOrdersById)

module.exports = router