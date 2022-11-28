'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const esquemaUsuarios = Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    rol: String,
    imagen: String
});

module.exports = mongoose.model('Usuarios', esquemaUsuarios);