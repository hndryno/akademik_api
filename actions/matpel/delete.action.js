Matpel = require('../../models/mata_pelajaran.model')

class DeleteMatpel{
    constructor(id){
        this.id = id
    }

    async exec(){
        try{
            let query = await Matpel.findOneAndDelete({
                _id: this.id
            })

            return query
        }catch(e){
            throw e
        }
    }
}

module.exports = DeleteMatpel