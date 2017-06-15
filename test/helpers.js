import axios from 'axios'
import express from 'express'
import bodyParser from 'body-parser'

export function makeServer(testRouter, path = '/', httpMethod) {
  const app = express()
  app.use(bodyParser.json())
  app.use(path, testRouter)

  const server = app.listen(0)
  return server
}

export function makeRequest(server) {
  const port = server.address().port
  return axios.create({
    baseURL: `http://localhost:${port}`,
  })
}
