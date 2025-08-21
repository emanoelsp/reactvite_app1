const express = require("express")
const cors = require("cors")
const fs =  require("fs")
const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3001")
})

app.get('/', (req, res) => {
    res.send("Servidor rodando na porta 3001 ")
})