'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
// --

app.use(bodyParser.urlencoded({extended:false}));//necesario para que body-parser funcione
app.use(bodyParser.json());// convertir a objetos json las peticiones que nos llegan

//Configurar cabeceras http
//--

// rutas base
	app.get('/testeo', function(req, res){
		res.status(200).send({message: 'ruta funcional'});
	});
//--

module.exports = app; //permite utilizar express en otros fitxeros que tengan app