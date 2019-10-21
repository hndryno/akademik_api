const express = require('express')
const router = express.Router()
const { check } = require("express-validator")
const Register = require('../actions/users/register.action')
const Login = require('../actions/users/login.action')
const verify_token = require("../middleware/verify_token.middleware")

// const { sendWelcomeEmail } = require('../actions/emails/welcome-email.action')

router.post('/register', [
    check('nama').not().isEmpty().isLength({ min:5 }),
    check('email').not().isEmpty().isLength({ min:5 }),
    check('password').not().isEmpty().isLength({ min:5 }),
], async (req, res, next) => await new Register().exec(req, res, next))

router.post('/login', async (req, res) => {
    try{
        let data = await new Login(req).exec()
        return res.status(200).json({
            status: 'success',
            data,
            message: 'Anda berhasil login!'
        })
    }catch(e){
        return res.status(400).json({
            status: 'gagal login!',
            message: e.message
        })
    }
})

module.exports = router

