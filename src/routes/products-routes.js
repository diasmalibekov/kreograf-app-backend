const express = require('express')
// const {check} = require('express-validator')

const productsController = require('../controllers/products-controller')

const router = express.Router()

router.get('/', productsController.getProducts)

router.get('/:pid', productsController.getProductById)

router.post('/', productsController.createProduct)

module.exports = router
