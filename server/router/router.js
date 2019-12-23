/**
 * @Author: Ali
 * @Date:   2019-12-23T12:18:06+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-12-23T12:21:35+01:00
 */
const express = require('express');

const router = express.Router()

// define a route
router.get('/',(req,res) => {
  res.send('hello from express router')
})
// more the same
router.get('/about',(req,res) => {
  res.send('about express router!!')
})
module.exports = router
