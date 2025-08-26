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

app.get('/mensagens', (req, res) => {
    const mensagens = readMessage()
    res.json(mensagens)
})

app.delete('/mensagens/:id', (req, res) => {
    let mensagens = readMessage()
    const id = parseInt(req.params.id)
    const novasMensagens = mensagens.filter((msg) => msg.id !== id)
    writeMessage(novasMensagens)
    res.status(204).end()
})

app.get('/mensagens/:id', (req, res) => {
    const mensagens = readMessage()
    const id = parseInt(req.params.id)
    const mensagem = mensagens.find((msg) => msg.id === id)
    if (mensagem) {
        res.json(mensagem)
    } else {
        res.status(404).json({ error: "Mensagem não encontrada" })
    }
})

app.put('/mensagens/:id', (req, res) => {
    let mensagens = readMessage()
    const id = parseInt(req.params.id)
    const index = mensagens.findIndex((msg) => msg.id === id)
    if (index !== -1) {
        mensagens[index] = { id, ...req.body }
        writeMessage(mensagens)
        res.json(mensagens[index])
    } else {
        res.status(404).json({ error: "Mensagem não encontrada" })
    }
})