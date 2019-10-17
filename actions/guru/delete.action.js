Guru = require('../../models/guru.model')

class DeleteGuru{
    constructor(id){
        this.id = id
    }

    async exec(){
        try{
            let query = await Guru.findOneAndDelete({
                _id: this.id
            }) 

            return query
        }catch(e){
            throw e
        }
    }
}

module.exports = DeleteGuru