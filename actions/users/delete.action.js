Admin = require('../../models/user.model')

class DeleteAdmin{
    constructor(id){
        this.id = id
    }

    async exec(){
        try{
            let query = await Admin.findOneAndDelete({
                _id: this.id
            }).exec()

            return query
        }catch(e){
            throw e
        }
    }
}

module.exports = DeleteAdmin