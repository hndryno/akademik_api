const Matpel = require("../../models/mata_pelajaran.model")

class ShowMatpel{
    constructor(id){
        this.id = id
    }

    async exec() {
        try{
            let query = await Matpel.findOne({
                _id: this.id
            }).exec()

            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = ShowMatpel