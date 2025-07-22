const express = require("express")
const { estacionPost, estacionGet, estacionPatch, estacionDelete, estacionById } = require("../controllers/estaciones.controller")

const router = express.Router()

router.post("/", estacionPost)
router.get("/", estacionGet)
router.patch("/:estacionId", estacionPatch)
router.delete("/:estacionId", estacionDelete)
router.get("/:estacionId", estacionById)





module.exports = router