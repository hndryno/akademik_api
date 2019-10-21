const Matpel = require('../../models/mata_pelajaran.model')
const API = require('../../core/actions.core')

class DeleteMatpel extends API{
    constructor(){
        super(Matpel)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let data = await this.delete(id)

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

module.exports = DeleteMatpel