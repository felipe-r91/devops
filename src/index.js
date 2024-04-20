const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('Teste ok')
  if(res.status === 200){
    console.log('Teste finalizado com sucesso')
  }
})


app.listen(port, () => {
  console.log(`Server listening on  http://localhost:${port}/`)
})