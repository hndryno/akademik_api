const Matpel = require('../../models/mata_pelajaran.model')
const guruListener = require("../../listeners/guru.listener")
const events = require("events")
const emmiter = new events.EventEmitter()

class CreateMatpel{
    constructor(req){
        this.nama = req.body.nama,
        this.id_guru = req.body.id_guru
    }

    async exec(){
        try{
            guruListener(emmiter)
            let query = new Matpel({
                nama: this.nama,
                id_guru: this.id_guru
            })

            await query.save()

            emmiter.emit("guru.tambah-matpel", query)

            return query
        }catch(e){
            throw e
        }
    }
}

module.exports = CreateMatpel