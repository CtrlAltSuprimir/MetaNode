'use strict'

const mongoose = require("mongoose");
const schema = mongoose.Schema

const GameSchema = schema({
  name: String,
  cover: String,
  year: {type: Number, default: 0},
  genre: String,  
  developer: String
})

module.exports = mongoose.model('Game', GameSchema)
