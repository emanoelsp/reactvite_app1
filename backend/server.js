const express = require("express")
const cors = require("cors")
const fs =  require("fs")
const app = express()
const PORT = 3001

const writeMessage = (data) => {
    fs.writeFileSync('./mensagens.json', JSON.stringify(data, null, 2))
}

const readMessage = () => {
    const data = fs.readFileSync('./mensagens.json')
    return JSON.parse(data)
}

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3001")
})

app.get('/', (req, res) => {
    res.send("Servidor rodando na porta 3001 ")
})

app.post('/mensagens', (req, res) => {
    const mensagens = readMessage()
    const formData = req.body
    const novaMensagem = {
        id: mensagens.length > 0 ? mensagens[mensagens.length -1].id +1 : 1,
        ...formData
    }
    mensagens.push(novaMensagem);
    writeMessage(mensagens)
    res.status(201).json(novaMensagem)
})










