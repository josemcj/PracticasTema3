'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const esquemaArtistas = Schema({
    nombre: String,
    descripcion: String,
    imagen: String,
});

module.exports = mongoose.model('Artistas', esquemaArtistas);