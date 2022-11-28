const express = require('express');
const app = express();
const puerto = 3000;

app.use('/static', express.static(__dirname + '/templates'));

app.listen(puerto, () => {
    console.log(`Escuchando por el puerto ${puerto}`);
});

app.get('/', function(req, res) {
    // res.send('Hello world');

    let salida = {
        nombre: 'Jose',
        edad: 22,
        url: req.url
    }

    res.send(salida);
});

app.get('/otroServicio', function(req, res) {
    res.send('Hola mundo');
});