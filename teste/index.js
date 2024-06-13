const express = require("express")
const path =  require("path")
const app = express()
const porta = 3000

const basePath = path.join(__dirname, 'templates')



app.get('/app', (req, res)=>{
    res.sendFile(`${basePath}/app.html`)
})


app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(porta, () =>{
    console.log(`Exibindo na porta ${porta}`)
})