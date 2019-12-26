/**
 * @Author: Ali
 * @Date:   2019-12-23T12:08:07+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-12-26T09:32:18+01:00
 */
const app = require('express')();
const mongoose = require('mongoose');
require('dotenv').config()
const router = require('./router/router');

const PORT = process.env.PORT || 5000

//connecting to mongoDB database

// we can also use a callback instead of a promise
mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log('Connected to DB successfully'))
.catch(err => console.error(err))

//middleware
app.use(router)
//Start server
app.listen(PORT, () => {
  console.log(`Express Server is running on port ${PORT}`)})

/*
VBJ6j3ibLJqrFYp
adminUser


*/
