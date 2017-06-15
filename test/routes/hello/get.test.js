import helloRouter from 'routes/hello'

import express from 'express'
import axios from 'axios'
import { expect } from 'chai'
import sinon from 'sinon'

import { makeServer, makeRequest } from 'test/helpers'

let request
let server
let sandbox
describe('routes -> hello -> get', () => {
  beforeEach(() => {
    server = makeServer(helloRouter)
    request = makeRequest(server)
    sandbox = sinon.sandbox.create()
  })
  afterEach(() => {
    server.close()
    sandbox.restore()
  })
  it('should return `Hello World`', async () => {
    const resp = await request.get('/')

    expect(resp.data).equal('Hello World')
  })
})
