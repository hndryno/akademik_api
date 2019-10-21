const Guru = require('../../models/guru.model')
const API = require('../../core/actions.core')

class DeleteGuru extends API{
    constructor(){
        super(Guru)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let data = await this.delete(id)

            return res.send({
                code: 200,
                data,
                status: 'Berhasil!',
            })
        }catch(e){
            throw e
        }
    }
}

module.exports = DeleteGuru