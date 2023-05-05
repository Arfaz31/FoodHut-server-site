const express = require('express')
const app = express()
const port = 5000



app.get('/', (req, res) => {
    res.send('Hello Chef')
  })




app.listen(port, () => {
    console.log(`FoodHut server is running ${port}`)
  })