const express = require("express")
const { userPost, userGet, userDelete, userById } = require("../controllers/user.controller")

const route = express.Router()

route.post("/", userPost)
route.get("/", userGet)
route.patch("/:userId", userPatch)
route.delete("/:userId", userDelete)
route.get("/:userId", userById)



module.exports = route