const { readDb, writeDb } = require('./dbFunctions')
const express = require('express')
const app = express()
const port = 8383

//Middleware
app.use(express.json())


//Routes
app.get('/', (req, res) => {

})

app.get('/:friend', (req, res) => {
    //https://localhost:3000/james?limit=2
    const { friend } = req.params
    const { limit } = req.query
})

app.post('/', (req, res) => {
    const { newFriend } = req.body

})

app.delete('/', (req, res) => {
    const { id } = req.body
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))