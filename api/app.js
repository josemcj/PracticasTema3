'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Rutas
const userRoutes = require('./routes/usuarioRuta');

app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );

// Rutas base
app.use('/api', userRoutes);

app.get('/pruebas', function(req, res) {
    res.status(200).send({ message: 'Bienvenido al curso' });
});

module.exports = app;