const mongoose = require('mongoose')
const httpError = require('../models/http-error')

const Product = mongoose.model('Product')

const getProducts = async (req, res) => {
	const products = await Product.find()
	res.send(products)
}

const createProduct = async (req, res) => {
	const {title, price, image, salesTime, needToBuy, bought, vendorCode} = req.body
	const product = new Product({
		title,
		price, 
		image, 
		salesTime, 
		needToBuy,
		bought, 
		vendorCode
	})
	await product.save()

	res.json({message: 'New product successfully created.'})	
}

const getProductById = async (req, res) => {
	const id = req.params.pid 
	const product = await Product.findById(id)
	res.send(product)

}

exports.getProducts = getProducts
exports.createProduct = createProduct
exports.getProductById = getProductById