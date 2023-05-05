const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000


app.use(cors())

const allChefData = require('./data.json')

app.get('/', (req, res) => {
    res.send('Hello Chef')
  })


  app.get('/chef', (req, res)=>{
    res.send(allChefData)
})

app.get('/chef/:id', (req, res)=>{
    const id = req.params.id;
    const chefsData = allChefData.find(chef=> chef.id == id) || {};
    res.send(chefsData)
})


app.listen(port, () => {
    console.log(`FoodHut server is running ${port}`)
  })