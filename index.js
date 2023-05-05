const express = require('express')
const app = express()
const port = 5000


const allChefData = require('./data.json')

app.get('/', (req, res) => {
    res.send('Hello Chef')
  })


  app.get('/chef', (req, res)=>{
    res.send(allChefData)
})

app.listen(port, () => {
    console.log(`FoodHut server is running ${port}`)
  })