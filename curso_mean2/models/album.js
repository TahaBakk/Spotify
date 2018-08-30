'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; //premite crear un objeto del tipo esquema para poder guardar una coleccion en un sition concreto

var AlbumSchema = Schema({
	title: String,
	descrition: String,
	year: Number,
	image: String,
	artist: {type: Schema.ObjectId, ref: 'Artist'}
});

module.exports = mongoose.model('Album',AlbumSchema);