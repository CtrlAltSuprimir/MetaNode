'use strict'

const Game = require('../models/game')

function getGame(req, res){
  let gameID = req.params.gameID

	Game.findById(gameID, (err, game) => {
		if(err) return res.status(500).send({message: "Error al realizar la peticion"})
		if(!game) return res.status(404).send({message: "El juego no existe"})

		res.status(200).send({game})
	})
}

function getGames(req, res){
  Game.find({}, (err, games) => {
		if (err) return res.status(500).send({message: "Error al realizar la peticion"})
		if(!games) return res.status(404).send({message: "No hay juegos :("})

		res.status(200).send({games})
	})
}

function saveGame(req, res){
  console.log('POST /api/game')
	console.log(req.body)

	let game = new Game()

	game.name = req.body.name
	game.cover = req.body.cover
	game.year = req.body.year
	game.genre = req.body.genre
	game.developer = req.body.developer

	game.save((err, gameStored) =>{
		if(err) res.status(500).send({message: `Error al guardar el juego: ${err} `})

		res.status(200).send({game: gameStored})
	})
}

function updateGame(req, res){
  let gameID = req.params.gameID
	let update = req.body

	Game.findByIdAndUpdate(gameID, update, (err, gameUpdate) => {
		if(err) return res.status(500).send({message: "Error en el sistema"})
		if(!gameUpdate) return res.status(404).send({message: "No se ha encontrado el juego"})

		res.status(200).send({game: gameUpdate})
	})
}

function deleteGame(req, res){
  let gameID = req.params.gameID
	Game.findById(gameID, (err, game) =>{
		if(err) return res.status(500).send({message: "Error en el sistema"})
		if(!game) return res.status(404).send({message: "No se ha encontrado el juego"})

		game.remove((err) =>{
			if(err) return res.status(500).send({message: "Error en el sistema"})

			res.status(200).send({message: "El juego ha sido eliminado"})
		})
	})
}

module.exports = {
  getGame,
  getGames,
  saveGame,
  updateGame,
  deleteGame
}
