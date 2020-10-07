

const mongoose = require('mongoose')
const passport = require('passport')
const User = require('../models/user')

const getLogin = async(req, res) => {
    res.render('login')
}

const authUser = async(req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/verify',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
}

module.exports = {
    getLogin,
    authUser
}