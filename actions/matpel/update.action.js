const Matpel = require('../../models/mata_pelajaran.model')
const API = require('../../core/actions.core')

class List extends API{
    constructor(){
        super(Matpel)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let { nama, guru, kelas } = req.body
            let request_data = {
                nama,
                guru,
                kelas
            }
            let data = await this.update(id, request_data)

            return res.send({
                code: 200,
                status: 'Berhasil!',
                data
            })
        }catch(e){
            return res.send({
                code: 400,
                status: 'gagal!',
                message: e.message
            })
        }
    }
}

module.exports = List