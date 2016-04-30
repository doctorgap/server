import express from 'express'

import indexTemplate from './index.tpl.html.js'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res
    .send(indexTemplate())
})

export default router
