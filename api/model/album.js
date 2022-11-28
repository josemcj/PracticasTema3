'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const esquemaAlbum = Schema({
    titulo: String,
    descripcion: String,
    year: Number,
    imagen: String,
    artista: { type: Schema.ObjectId, ref: 'Artistas' }
});

module.exports = mongoose.model('Album', esquemaAlbum);