'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; //premite crear un objeto del tipo esquema para poder guardar una coleccion en un sition concreto

var ArtistSchema = Schema({
	name: String,
	description: String,
	image: String
});

module.exports = mongoose.model('Artist',ArtistSchema);