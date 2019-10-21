const Guru = require("../../models/guru.model")
const API = require('../../core/actions.core')
const { validationResult } = require('express-validator')

class CreateGuru extends API{
    constructor() {
        super(Guru)
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
            let { nama, umur, jenis_kelamin, alamat } = req.body
            let request_data = {
                nama,
                umur,
                jenis_kelamin,
                alamat
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

module.exports = CreateGuru