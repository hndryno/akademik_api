const Kelas = require('../../models/kelas.model')
const API = require('../../core/actions.core')

class List extends API{
    constructor(){
        super(Kelas)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let { nama } = req.body
            let request_data = {
                nama
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