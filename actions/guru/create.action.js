const Guru = require("../../models/guru.model") //import model

class CreateGuru {
    constructor(req) {
        this.nama = req.body.nama
        this.umur = req.body.umur
        this.jenis_kelamin = req.body.jenis_kelamin
        this.alamat = req.body.alamat
    }

    async exec() {
        try{
            let query = new Guru({
                nama: this.nama,
                umur: this.umur,
                jenis_kelamin: this.jenis_kelamin,
                alamat: this.alamat
            })
            await query.save()

            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = CreateGuru