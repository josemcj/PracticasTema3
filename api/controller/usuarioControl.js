'use strict';

const bcrypt = require('bcrypt');
const usuariosModelo = require('../model/usuarios');
const usuario = new usuariosModelo();

function prueba(req, res) {
    res.status(200).send({
        message: 'Probando una accion del controlador de usuarios del API REST con Node.js y Mongo'
    })
}

const registrarUsuario = (req, res) => {
    // Recibir datos por POST
    const params = req.body;
    console.log(params);

    usuario.nombre = params.nombre;
    usuario.apellido = params.apellido;
    usuario.email = params.email;
    usuario.password = params.password;
    usuario.rol = 'ROLE_USER';
    usuario.imagen = 'null';

    if (params.password) {

        // Encriptar contraseña y guardar datos
        bcrypt.hash(params.password, 10, (err, hash) => {
            usuario.password = hash;

            if (usuario.nombre != null && usuario.apellido != null  && usuario.email != null) {
                // Guardar usuario en base de datos
                usuario.save((err, usuarioAlmacenado) => {
                    if (err) {
                        res.status(500).send({ message: 'Error al guardar al usuario' });
                    } else {
                        if (!usuarioAlmacenado) {
                            res.status(404).send({ message: 'No se ha registrado al usuario' });
                        } else {
                            res.status(200).send({ usuario: usuarioAlmacenado });
                        }
                    }
                });
            } else {
                res.status(500).send({ message: 'Introduce todos los campos' });
            }
        });

    } else {
        res.status(500).send({ message: 'Introduce la contraseña' })
    }
}

// Login
const accesoUsuarios = (req, res) => {
    const params = req.body;
    const email = params.email;
    const password = params.password;

    usuariosModelo.findOne({ email: email }, (err, user) => {
        if (err) {
            res.status(500).send({ message: 'Error en la peticion' });
        } else {

            if (!user) {
                res.status(404).send({ message: 'El usuario no existe' });
            } else {
                bcrypt.compare(password, user.password, (err, check) => {
                    if (check) {
                        // Devolver los datos del usuario logueado
                        console.log('El password ingresado coincide');

                        if ( params.gethash ) {
                            // Devolver un token de JWT
                        } else {
                            res.status(200).send({ user: user });
                        }
                    } else {
                        res.status(404).send({ message: 'El usuario no se ha identificado' });
                    }
                });
            }

        }
    });
}

module.exports = {
    prueba,
    registrarUsuario,
    accesoUsuarios
}