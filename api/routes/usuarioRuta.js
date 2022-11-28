'use strict';

const express = require('express');
const usuarioControl = require('../controller/usuarioControl');
const api = express.Router();

api.get('/probando-controlador', usuarioControl.prueba);

api.post('/registro', usuarioControl.registrarUsuario);
api.post('/login', usuarioControl.accesoUsuarios);

module.exports = api;