const mongoose = require("mongoose")

const alquilerShema = new mongoose.Schema({
    // bicicletas: {type: mongoose.Schema.Types.ObjectId, ref: "Bicicleta", require: true},

    // estacionSalida: {type: mongoose.Schema.type.ObjectId, ref: "estacion", require: true},

    bicicleta: {
        type: String,
        require: true
    },

    estacionSalida: {
        type: String,
        require: true
    },

    fechaInicio: {
        type: Date,
        default: Date.now
    },

    fechaFin: {
        type: Date,
        default: Date.now
    },

    activo: {
        type: Boolean,
        default: true
    }
})



const alquilerModels = mongoose.model("Alquiler", alquilerShema)

module.exports = alquilerModels