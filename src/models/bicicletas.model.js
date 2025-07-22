const mongoose = require("mongoose")

const alquilershema = new mongoose.Schema({
    serial:{
        type: String,
        required: true,
        unique: true
    },

    estado:{
        type: String,
        enum: ["disponible", "en uso", "en mantenimiento"],
        default : "disponible"
    }
})


const bicicletasModels = mongoose.model("bicicletas", alquilershema)

module.exports = bicicletasModels