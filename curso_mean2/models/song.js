'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; //premite crear un objeto del tipo esquema para poder guardar una coleccion en un sition concreto

var SongSchema = Schema({
	number: String,
	name: String,
	duration: String,
	file: String,
	album: {type: Schema.ObjectId, ref: 'Album'}
});

module.exports = mongoose.model('Song',SongSchema);