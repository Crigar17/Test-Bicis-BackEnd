const express = require("express")
const dbconnect = require("./config/mongo.config")

const app = express()

const port = 3000

dbconnect()
app.use(express.json())

app.use ("/api/bicicletas", require("./routes/bicicletas.route.js"))

app.use("/api/estacion", require("./routes/estacion.route.js"))

app.use("/api/alquiler", require("./routes/alquiler.route.js"))

app.use("/api/user", require("./routes/user.route.js"))


app.listen(port,() => {
    console.log("Servidor corriendso en el puerto:", port);
})