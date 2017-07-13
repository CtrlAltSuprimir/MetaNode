'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const GameCtrl = require('../controllers/game')
const UserCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()


api.get('/product', ProductCtrl.getProducts)
api.get('/product/:productID', ProductCtrl.getProduct)
api.post('/product', ProductCtrl.saveProduct)
api.put('/product/:productID', ProductCtrl.updateProduct)
api.delete('/product/:productID', ProductCtrl.deleteProduct)
api.post('/signup', UserCtrl.signUp)
api.post('/signin', UserCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({message: "Tienes autorizacion"})
})
api.get('/game', GameCtrl.getGames)
api.get('/game/:gameID', GameCtrl.getGame)
api.post('/game', GameCtrl.saveGame)
api.put('/game/:gameID', GameCtrl.updateGame)
api.delete('/game/:gameID', GameCtrl.deleteGame)

module.exports = api
