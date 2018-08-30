'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; //premite crear un objeto del tipo esquema para poder guardar una coleccion en un sition concreto

var UserSchema = Schema({
	name: String,
	surname: String,
	email: String,
	password: String,
	role: String,
	image: String
});

module.exports = mongoose.model('User',UserSchema);