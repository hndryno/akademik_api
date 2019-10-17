const User = require('../../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class Login {
    constructor(req){
        this.email = req.body.email,
        this.password = req.body.password
    }

    async exec(){
        try{
            let data = await User.find({
                email: this.email
            }).exec()
            if(data.length == 0){
                throw Error('user tidak ditemukan!')
            }

            let password = await bcrypt.compare(this.password, data[0].password)
            if(!password) {
                throw Error('Tidak terauntentifikasi!')
            }

            let payload = {
                user_id: data[0]._id,
                user_nama: data[0].nama,
            }

            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: 86400 //24 jam
            })

            return {
                user: payload,
                token,
                expiresIn: '24 jam'
            }
        }catch(err){
            throw err
        }
    }
}

module.exports = Login