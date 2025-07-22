const mongoose = require("mongoose")

const estacionShema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },

    ubicacion: {
        latitud: {type: Number, require: true},
    },

    capacidad: {
        type: Number,
        require: true
    },

    bicicletasDisponibles: {
        type: Number,
        default: 0
    }
})

const estacionModel = mongoose.model ("Estaciones", estacionShema)

module.exports = estacionModel