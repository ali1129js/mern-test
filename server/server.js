/**
 * @Author: Ali
 * @Date:   2019-12-23T12:08:07+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-12-23T12:22:09+01:00
 */
const app = require('express')();
const router = require('./router/router');
const PORT = process.env.PORT || 5000


app.use(router)
app.listen(PORT, ()=> console.log(`Express Server is running on port ${PORT}`))
