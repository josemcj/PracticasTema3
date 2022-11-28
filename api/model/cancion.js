'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const esquemaCancion = Schema({
    numero: String,
    nombre: String,
    duracion: String,
    file: String,
    album: { type: Schema.ObjectId, ref: 'Album' }
});

module.exports = mongoose.model('Cancion', esquemaCancion);