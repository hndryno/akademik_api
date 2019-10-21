const Matpel = require("../../models/mata_pelajaran.model")
const API = require("../../core/actions.core")

class ShowMatpel extends API{
    constructor(){
        super(Matpel)
    }

    async exec(req, res, next) {
        try{
            let {id} = req.params
            let data = await this.show(id)

            return res.send({
                code: 200,
                status: 'success',
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

module.exports = ShowMatpel