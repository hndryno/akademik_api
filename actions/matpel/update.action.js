let Matpel = require('../../models/mata_pelajaran.model')

class UpdateMatpel{
    constructor(id, req){
        this.id = id,
        this.nama = req.body.nama,
        this.id_guru = req.body.id_guru
    }

    async exec(){
        try{
            let data = {
                id: this.id,
                nama: this.nama,
                id_guru : this.id_guru
            }
    
            let query = await Matpel.findByIdAndUpdate({
                _id: this.id
            }, data, {new: true}).exec()
    
            return query
        }catch(e){
            throw e
        }
    }
}

module.exports = UpdateMatpel