const UpdateGuru = require('../actions/guru/updateListener.action')
const ShowGuru = require("../actions/guru/show.action")

const guru = {
    tambah_jumlah_matpel: async data => {
        try{
            let _id = data.id_guru
            let guru = await new ShowGuru(_id).exec()
            console.log(`Jumlah Mata Pelajaran ${guru.banyak_pelajaran}`)
            let banyak_pelajaran = parseInt(guru.banyak_pelajaran) + 1
            console.log(banyak_pelajaran)
            let update = await new UpdateGuru({ _id }, { banyak_pelajaran }).exec()
            console.log(`Shop updated ${JSON.stringify(update)}`)
        }catch(e){
            throw e
        }
    }
}

module.exports = eventEmitter => {
    eventEmitter.on('guru.tambah-matpel', guru.tambah_jumlah_matpel)
}