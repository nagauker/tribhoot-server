const express = require('express')
const {checkIsAdmin} = require('../handler/management')

const router = express.Router()

router.post('/password', (req, res) => {
  try {
    console.log(req);
    res.send(checkIsAdmin(req.body))
  } catch (err) {
    throw err
  }
})

module.exports = router