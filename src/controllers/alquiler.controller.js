const alquilerModels = require("../models/alquiler.model")


alquilerPost = async (req, res) => {
    const inputData = req.body

    try {
        const data = await alquilerModels.create( inputData )

        res.json( data )
    } 
    catch (error) {
        res.json({msg: "No se pudo crear el alquiler"})
    }
}

alquilerGet = async (req, res) => {
    try {
        const data = await alquilerModels.find().populate(["Estaciones", "bicicleta"])

        res.json( data )
    } 
    catch (error) {
        res.json({msg:"Error al obtener los alquileres"})
    }
}

alquilerPatch = async (req, res) => {
    const alquilerId = req.params.alquilerId
    const inputData = req.body

    try {
        const data = await alquilerModels.findByIdAndUpdate(alquilerId, inputData, {new: true})

        res.json( data )
    } 
    catch (error) {
        res.json({msg:"Error al actualizar alquiler"})
    }
}

alquilerDelete = async (req, res) => {
    const alquilerId = req.params.alquilerId

    try {
        const data = await alquilerModels.findByIdAndDelete( alquilerId )

        res.json( data )
    } 
    catch (error) {
        res.json({msg:"Error al eliminar alquiler"})
    }
}

alquilerById = async (req, res) => {
    const alquilerId = req.params.alquilerId

    try {
        const data = await alquilerModels.findById( alquilerId ).populate(["bicicleta", "Estaciones"])

        res.json( data )
    } 
    catch (error) {
        res.json({msg:"Error al buscar el alquiler"})
    }
}

module.exports = {
    alquilerPost,
    alquilerGet,
    alquilerPatch,
    alquilerDelete,
    alquilerById
}
