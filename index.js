const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.post('/post', (req, res) => {
    res.send('req.body')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})