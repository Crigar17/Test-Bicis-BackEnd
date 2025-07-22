const estacionModel = require("../models/estacion.models")

estacionPost = async (req, res) => {
    const inputData = req.body
    
    try {
        const data = await estacionModel.create( inputData )
        
        res.json( data )
    } 
    catch (error) {
        res.json({msg: "Error al crear estacion"})
    }
}

estacionGet = async (req, res) => {
    
    try {
        const data = await estacionModel.find()

        res.json( data )
    } 
    catch (error) {
        res.json({msg: "Error al buscar las estaciones"})
    }
}

estacionPatch = async (req, res) => {
    const estacionId = req.params.estacionId
    const inputData = req.body

    try {
        const data = await estacionModel.findByIdAndUpdate( estacionId, inputData, {new: true} )

        res.json( data )
    } 
    catch (error) {
        res.json({msg: "Error al actualizar la estacion"})
    }

}

estacionDelete = async (req, res) => {
    const estacionId = req.params.estacionId

    try {
        const data = await estacionModel.findByIdAndDelete( estacionId )

        res.json( data )
    } 
    catch (error) {
        res.json({msg: "Error al eliminar estacion"})
    }
}

estacionById = async (req, res) => {
    const estacionId = req.params.estacionId

    try {
        const data = await estacionModel.findById( estacionId )

        res.json( data )
    } 
    catch (error) {
        res.json({msg:"Error al encontrar estacion"})
    }
}

module.exports = {
    estacionPost,
    estacionGet,
    estacionPatch,
    estacionDelete,
    estacionById
}

