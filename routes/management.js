const express = require('express')
const checkIsAdmin = require('../handler/management')

const router = express.Router()

router.post('/password', async (req, res) => {
  try {
    const response = await checkIsAdmin(req,res)
    res.send(response)
  } catch (err) {
    throw err
  }
})

module.exports = router