const express = require('express')
const router = express.Router()
const Register = require('../actions/users/register.action')
const Login = require('../actions/users/login.action')
// const { sendWelcomeEmail } = require('../actions/emails/welcome-email.action')

router.post('/register',async (req, res) => {
    try{
        let data = await new Register(req).exec()
        // sendWelcomeEmail(data.user.user_email, data.user.user_nama)

        return res.status(201).json({
            status: 'success',
            data,
            message: 'registrasi user berhasil!'
        })        
    }catch(e){
        return res.status(400).json({
            status: 'gagal!',
            message: e.message
        })
    }
})

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

