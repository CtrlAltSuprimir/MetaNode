'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

/*mongoose.connect(config.db, (err, res) => {
	if(err) return console.log(`Tenemos un error en el sistema: ${err}`)

	app.listen(config.port, () => {
		console.log(`HOLA BUENAS TARDES!!! Estoy funcionando en el puerto ${config.port}`);
	})
})*/
