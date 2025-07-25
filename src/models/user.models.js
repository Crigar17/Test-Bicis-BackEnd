const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        uniquie: true
    },

    email: {
        type: String,
        require: true,
        uniquie: true,
    },

    password: {
        type: String,
        require: true,
        uniquie: true
    },

    alquiler: {
        type: [mongoose.Schema.Types.ObjectId]
    }
})



const userModel = mongoose.model("User", userShema)

module.exports = userModel