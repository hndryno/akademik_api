const Guru = require('../../models/guru.model')
const API = require('../../core/actions.core')

class Update extends API{
    constructor(){
        super(Guru)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let { nama, umur, jenis_kelamin, alamat } = req.body
            let request_data = {
                nama, umur, jenis_kelamin, alamat
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

module.exports = Update