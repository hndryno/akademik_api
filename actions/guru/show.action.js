const Guru = require('../../models/guru.model')

class ShowGuru{
    constructor(id){
        this.id = id
    }

    async exec(){
        try{
            let query = await Guru.findOne({
                _id: this.id
            }).exec()
            return query

        }catch(e){
            throw e
        }
    }
}

module.exports = ShowGuru