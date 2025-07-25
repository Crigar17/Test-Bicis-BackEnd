const mongoose = require("mongoose")

const alquilerShema = new mongoose.Schema({
    bicicleta: {
        type: mongoose.Schema.Types.ObjectId, ref: "bicicletas",
        require: true
    },

    usuario: {
        type: mongoose.Schema.Types.ObjectId, ref: "usuario",
        require: true
    },

    estacionSalida: {
        type: String,
        require: true,
        type: mongoose.Schema.Types.ObjectId, ref: "Estaciones"
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
    },


    estaciones: {type: mongoose.Schema.Types.ObjectId, ref: "estaciones"}
})



const alquilerModels = mongoose.model("Alquiler", alquilerShema)

module.exports = alquilerModels