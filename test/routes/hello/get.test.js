import helloRouter from 'routes/hello'

import { expect } from 'chai'

import { makeServer, makeRequest } from 'test/helpers'

let request
let server
describe('routes -> hello -> get', () => {
  beforeEach(() => {
    server = makeServer(helloRouter)
    request = makeRequest(server)
  })
  afterEach(() => {
    server.close()
  })
  it('should return `Hello World`', async () => {
    const resp = await request.get('/')

    expect(resp.data).equal('Hello World')
  })
})
