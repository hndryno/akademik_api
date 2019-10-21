const Kelas = require('../../models/kelas.model')
const API = require('../../core/actions.core')

class List extends API{
    constructor(){
        super(Kelas)
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
                message: e.message
            })
        }
    }
}

module.exports = List