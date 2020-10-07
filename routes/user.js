

const express = require('express')
const router = express.Router()
const { createUser, getSignup } = require('../controllers/signUpController')
const { authUser, getLogin } = require('../controllers/loginController')


//login route
router.route('/login')
    .get(getLogin)
    .post(authUser)


//signup route
router.route('/signup')
    .get(getSignup)
    .post(createUser)


//export router
module.exports = router