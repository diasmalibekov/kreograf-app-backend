require('./models/Product')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const productsRoutes = require('./routes/products-routes')

const app = express()

app.use(bodyParser.json())
app.use('/api/products', productsRoutes)

const mongoURI = 'mongodb+srv://admin:adminadmin@cluster0.fzybs.mongodb.net/kreograf?retryWrites=true&w=majority'
mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useCreateIndex: true
	})
	.then(() => {
		app.listen(3000, () => {console.log('Listening on localhost 3000!')})
	})
	.catch(err => console.log(err))