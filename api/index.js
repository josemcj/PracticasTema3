const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3977;

mongoose.connect('mongodb://127.0.0.1:27017/practicaexpress', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('Conexion exitosa');

        app.listen(port, () => {
            console.log(`Servidor API REST de música escuchando en http://localhost:${port}`)
        });
    }
});