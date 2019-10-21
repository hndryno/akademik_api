const Kelas = require('../../models/kelas.model')
const API = require('../../core/actions.core')
const { validationResult } = require('express-validator')

class Create extends API {
    constructor() {
        super(Kelas)
    }

    async exec(req, res, next) {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.send({
                code: 422,
                status: "error",
                message: errors.array()
            })
        }

        try{
            let { nama } = req.body
            let request_data = {
                nama
            }

            let data = await this.create(request_data)

            return res.send({
                code: 201,
                status: "berhasil",
                data
            })
        }catch(e){
            return res.send({
                code: 400,
                status: "error",
                message: e.message
            })
        }
    }
}

module.exports = Create