Admin = require('../../models/user.model')

class UpdateUser{
    constructor(id, req){
        this.id = id,
        this.nama = req.body.nama
    }

    async exec(){
        try{
            let data = {
                id: this.id,
                nama: this.nama
            }

            let query = await Admin.findOneAndUpdate({
                _id: this.id
            }, data,{new: true}).exec()

            return query
        }catch(e){
            throw e
        }
    }
}

module.exports = UpdateUser

