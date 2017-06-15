import express from 'express'

import compression from 'compression'
import bodyParser from 'body-parser'

import config from 'config'

import helloRouter from 'routes/hello'

const server = express()

server.use(compression())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.get('/favicon.ico', (req, res) => {
  res.sendStatus(204);
});

server.use('/', helloRouter)

server.listen(config.port, () => {
  console.log(`app listen on port ${config.port}`)
})
