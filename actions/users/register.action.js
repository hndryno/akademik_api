const UserModel = require('../../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class Register{
    constructor(req){
        this.nama = req.body.nama,
        this.email = req.body.email,
        this.password = req.body.password
    }

    async exec(){
        try{
            let password = bcrypt.hashSync(this.password, 8) //params password, salt
            console.log(`hashing password ${password}`)
            let insert_data = {
                nama: this.nama,
                email: this.email,
                password
            }

            let query = new UserModel(insert_data)
            await query.save()

            let payload = {
                user_id: query._id,
                user_nama: query.nama,
                user_email: query.email,
            }

            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: 86400 // 24 jam
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

module.exports = Register