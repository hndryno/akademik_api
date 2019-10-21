const User = require('../../models/user.model')
const API = require('../../core/actions.core')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

class Register extends API{
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.send({
                code: 422,
                status: "error",
                message: errors.array()
            })
        }
        try{
            let { nama, email, password } = req.body
            password = bcrypt.hashSync(password, 8) //params password, salt
            let request_data = {
                nama,
                email,
                password
            }

            let data = await this.create(request_data)

            let payload = {
                user_id: data._id,
                user_nama: data.nama,
                user_email: data.email,
            }

            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: 86400 // 24 jam
            })

            return res.send({
                code: 201,
                token,
                status: "berhasil",
                user: payload,
                expiresIn:'24jam',
                data
            })
        }catch(err){
            throw err
        }
    }
}

module.exports = Register