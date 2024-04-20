const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('Teste ok')
})


app.listen(port, () => {
  console.log(`Server listening on  http://localhost:${port}/`)
})