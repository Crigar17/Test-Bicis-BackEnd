const express = require("express")
const { alquilerPost, alquilerGet, alquilerPatch, alquilerDelete, alquilerById } = require("../controllers/alquiler.controller")

const route = express.Router()

route.post("/", alquilerPost)
route.get("/", alquilerGet)
route.patch("/:alquilerId", alquilerPatch)
route.delete("/:alquilerId", alquilerDelete)
route.get("/:alquilerId", alquilerById)



module.exports = route