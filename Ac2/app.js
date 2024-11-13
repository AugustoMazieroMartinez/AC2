const express = require('express');
const mongoose = require('mongoose');
const app = express();

const clienteController = require('./controllers/clienteController');
const exameController = require('./controllers/exameController');

app.use(express.json());

app.use('/Cliente', clienteController);
app.use('/Exame', exameController);

//=============================
const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringify({mensagem : "teste"}));
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
//============================

mongoose.connect('mongodb://127.0.0.1:27017/ac2')
    .then(() => {
        app.listen(27017, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor iniciado na porta 27017');
        })
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(3000, () => { 
    console.log('Server running on port 3000');
});