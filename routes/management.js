const express = require('express')
const checkIsAdmin = require('../handler/management')

const router = express.Router()

router.post('/password', (req, res) => {
  try {
    checkIsAdmin(req)
    res.send("OK")
  } catch (err) {
    throw err
  }
})

module.exports = router