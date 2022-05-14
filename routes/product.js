const express = require('express')
const controller = require('../controllers/product')
const router = express.Router()

router.get('/', controller.getProductAll)
router.get('/:id', controller.getProductById)
router.post('/', controller.createProduct)
module.exports = router