const mongoose = require('mongoose')

const Exame = mongoose.model('Exame', {
    nome: String,
    clinica: String,
    idCliente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
});

module.exports = Exame;