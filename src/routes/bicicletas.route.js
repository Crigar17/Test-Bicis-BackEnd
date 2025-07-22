const express = require("express")
const { bicicletasGet,  bicicletasPost, bicicletasPacth, bicicletasDelete, bicicletasById } = require("../controllers/bicicletas.controller")

const router = express.Router()

router.post("/", bicicletasPost)
router.get("/", bicicletasGet)
router.patch("/:biciId", bicicletasPacth)
router.delete("/:biciId", bicicletasDelete)
router.get("/:biciId", bicicletasById)

module.exports = router
