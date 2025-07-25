const mongoose = require("mongoose")

const estacionShema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        unique: true
    },

    ubicacion: {
        latitud: {type: Number, require: true},
    },

    capacidad: {
        type: Number,
        require: true
    },

    bicicletasDisponibles: {
        type: [mongoose.Schema.Types.ObjectId],
    }
})

const estacionModel = mongoose.model ("Estaciones", estacionShema)

module.exports = estacionModel