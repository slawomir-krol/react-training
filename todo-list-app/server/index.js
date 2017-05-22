const express = require('express')
const app = express()
const port = 3001;
const todos = require('./todos');

app.get('/api/todos', (request, response) => {
  response.send(todos);
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
