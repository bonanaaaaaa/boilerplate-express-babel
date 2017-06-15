import express from 'express'

const router = express.Router()

async function get(req, res) {
  res.status(200).send('Hello World')
}

router.get('/', get)

export default router
