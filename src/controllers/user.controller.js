const userModel = require("../models/user.models")

userPost = async (req, res) => {
    const inputData = req.body

    try {
        const data = await userModel.create( inputData )

        res.json( data )
    } 
    catch (error) {
        res.json({msg: "Error al crear usuario"})
    }
}

userGet = async (req, res) => {
    try {
        const data = await userModel.find().populate( "Alquiler" )
        
        res.json( data )
    } 
    catch (error) {
        res.json({msg: "Error al obtener usuarios"})
    }
}

userPatch = async (req, res) => {
    const userId = req.params.userId
    const inputData = req.body

    try {
        const  data = await userModel.findByIdAndUpdate( userId, inputData, {new: true})

        res.json( data )
    } 
    catch (error) {
        res.json({msg: "Error al actualizar user"})
    }
}

userDelete = async (req, res) => {
    const userId = req.params.userId

    try {
        const data = await userModel.findByIdAndDelete( userId )

        res.json( data )
    } 
    catch (error) {
        res.json({msg: "Error al eliminar user"})
    }
}

userById = async (req, res) => {
    const userId = req.params.userId

    try {
        const data = await userModel.findById( userId ).populate( "Alquiler" )

        res.json( data )
    } 
    catch (error) {
        res.json({msg:"Error al obtener user"})
    }
}


module.exports = {
    userPost,
    userGet,
    userPatch,
    userDelete,
    userById
}