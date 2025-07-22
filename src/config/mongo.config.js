const mongoose = require("mongoose")

async function dbconnect () {
    try {
        await mongoose.connect("mongodb://localhost:27017/bd-bicis")
        console.log("Base de datos corriendo");
    } catch (error) {
        console.error("Error al conectar a la base de datoss");
    }
}

module.exports = dbconnect