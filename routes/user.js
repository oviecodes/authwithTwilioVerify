

const express = require('express')
const router = express.Router()


//login route
router.route('/login')
    .get()
    .post()


//signup route
router.route('/signup')
    .get()
    .post()


//export router
module.exports = router