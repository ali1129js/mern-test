/**
 * @Author: Ali
 * @Date:   2019-12-23T12:18:06+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-12-23T12:40:07+01:00
 */
const express = require('express');

const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) =>{
  const timeStamp = new Date().toLocaleTimeString()
  console.log('Time: ',timeStamp )
  next()
})


// define a home route
router.get('/',(req,res) => {
  res.send('hello from express router')
})
// another route
router.get('/about',(req,res) => {
  res.send('about express router!!')
})
module.exports = router
