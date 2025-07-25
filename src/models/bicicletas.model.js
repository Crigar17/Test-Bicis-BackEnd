const mongoose = require("mongoose")

const bicicletashema = new mongoose.Schema({
    serial:{
        type: String,
        required: true,
        unique: true,
        Types: mongoose.Schema.Types.ObjectId
    },

    estado:{
        type: String,
        enum: ["disponible", "en uso", "en mantenimiento"],
        default : "disponible"
    },
})


const bicicletasModels = mongoose.model("bicicleta", bicicletashema)

module.exports = bicicletasModels