 const mongoose = require('mongoose')

 const productSchema = new mongoose.Schema({
 	title: {type: String, required: true},
 	price: {type: Number, required: true},
 	image: {type: String, required: true},
 	salesTime: {
 		month: {type: Number, required: true},
 		day: {type: Number, required: true}
 	},
 	needToBuy: {type: Number, required: true},
 	bought: {type: Number, required: true},
 	vendorCode: {type: Number, required: true}
 })

 mongoose.model('Product', productSchema)