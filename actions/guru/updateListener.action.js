const Guru = require('../../models/guru.model')

class UpdateGuru{
    constructor(params, updated){
        this.params = params,
        this.updated = updated
    }

    async exec(){
        try{
            let query = await Guru.findOneAndUpdate(
                this.params,
                this.updated,
                {
                    new: true
                }).exec()

                return query
        }catch(e){
            throw e
        }
    }
}

module.exports = UpdateGuru