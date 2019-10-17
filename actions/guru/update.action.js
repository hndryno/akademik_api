Guru = require('../../models/guru.model')

class UpdateGuru{
    constructor(id, req){
        this.id = id,
        this.nama = req.body.nama,
        this.umur = req.body.umur,
        this.jenis_kelamin = req.body.jenis_kelamin,
        this.alamat = req.body.alamat
    }

    async exec(){
        try{
            let data = {
                id: this.id,
                nama: this.nama,
                umur: this.umur,
                jenis_kelamin: this.jenis_kelamin,
                alamat: this.alamat,
            }

            let query = await Guru.findOneAndUpdate({
                _id: this.id
            }, data,{new: true}).exec()

            return query
        }catch(e){
            throw e
        }
    }
}

module.exports = UpdateGuru

