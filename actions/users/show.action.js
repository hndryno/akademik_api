Admin = require('../../models/user.model')

class ShowAdmin{
    constructor(id){
        this.id = id
    }

    async exec(){
        try{
            const data = await Admin.findOne({
                _id: this.id
            }).exec()

            return data
        }catch(e){
            throw e
        }
    }
}

module.exports = ShowAdmin