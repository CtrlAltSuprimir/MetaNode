'use strict'

const Product = require('../models/product')

function getProduct(req, res){
  let productID = req.params.productID

	Product.findById(productID, (err, product) => {
		if(err) return res.status(500).send({message: "Error al realizar la peticion"})
		if(!product) return res.status(404).send({message: "El producto no existe"})

		res.status(200).send({product})
	})
}

function getProducts(req, res){
  Product.find({}, (err, products) => {
		if (err) return res.status(500).send({message: "Error al realizar la peticion"})
		if(!products) return res.status(404).send({message: "No hay productos :("})

		res.status(200).send({products})
	})
}

function saveProduct(req, res){
  console.log('POST /api/product')
	console.log(req.body)

	let product = new Product()

	product.name = req.body.name
	product.picture = req.body.picture
	product.price = req.body.price
	product.category = req.body.category
	product.description = req.body.description

	product.save((err, productStored) =>{
		if(err) res.status(500).send({message: `Error al guardar el producto: ${err} `})

		res.status(200).send({product: productStored})
	})
}

function updateProduct(req, res){
  let productID = req.params.productID
	let update = req.body

	Product.findByIdAndUpdate(productID, update, (err, productUpdate) => {
		if(err) return res.status(500).send({message: "Error en el sistema"})
		if(!productUpdate) return res.status(404).send({message: "No se ha encontrado el producto"})

		res.status(200).send({product: productUpdate})
	})
}

function deleteProduct(req, res){
  let productID = req.params.productID
	Product.findById(productID, (err, product) =>{
		if(err) return res.status(500).send({message: "Error en el sistema"})
		if(!product) return res.status(404).send({message: "No se ha encontrado el producto"})

		product.remove((err) =>{
			if(err) return res.status(500).send({message: "Error en el sistema"})

			res.status(200).send({message: "El producto ha sido eliminado"})
		})
	})
}

module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}
