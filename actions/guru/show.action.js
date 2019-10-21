const Guru = require('../../models/guru.model')
const API = require('../../core/actions.core')

class Show extends API{
    constructor(){
        super(Guru)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let data = await this.show(id)

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

module.exports = Show