const bicicletasModels = require("../models/bicicletas.model")

bicicletasPost = async (req, res) => {
    try {
        const inputData = req.body

        const data = await bicicletasModels.create( inputData )
        res.json( data )
    } 
    catch (error) {
        res.json({msg: 'Error al obetener los datos'})
    }
}

bicicletasGet = async (req, res) => {
    try {
        const data = await bicicletasModels.find()

        res.json( data )
    } 
    catch (error) {
        
    }
}

bicicletasPacth = async (req, res) => {
    
    const biciId = req.params.biciId
    const inputData = req.body

    try {
        const data = await bicicletasModels.findByIdAndUpdate( biciId, inputData, {new: true} )

        res.json( data )
    } 
    catch (error) {
        res.json({msg: "Error al actualizar los datos"})
    }
}

bicicletasDelete = async (req, res) => {
    const biciId = req.params.biciId
    const inputData = req.body

    try {
        const data = await bicicletasModels.findByIdAndDelete( biciId, inputData, {new: true} )

        res.json( data )
    } 
    catch (error) {
        res.json({msg: "Error al eliminar la bicicleta"})
    }
}

bicicletasById = async (req, res) => {
    const biciId = req.params.biciId

    try {
        const data = await bicicletasModels.findById( biciId )

        res.json( data )
    } 
    catch (error) {
        res.json({msg: "Error al obtener la bicicleta"})
    }
}



module.exports = {
    bicicletasPost,
    bicicletasGet,
    bicicletasPacth,
    bicicletasDelete,
    bicicletasById
}

