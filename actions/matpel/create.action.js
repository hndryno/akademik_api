const Matpel = require('../../models/mata_pelajaran.model')
const API = require('../../core/actions.core')
const guruListener = require("../../listeners/guru.listener")
const events = require("events")
const { validationResult } = require('express-validator')
const emmiter = new events.EventEmitter()

class CreateMatpel extends API{
    constructor(){
        super(Matpel)
    }

    async exec(req, res, next){
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.send({
                code: 422,
                status: "error",
                message: errors.array()
            })
        }
        try{
            let { nama, guru, kelas } = req.body
            let request_data = {
                nama, guru, kelas
            }

            guruListener(emmiter)

            let query = await this.create(request_data)

            emmiter.emit("guru.tambah-matpel", query)

            return res.send({
                code: 201,
                status: "berhasil",
                query
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

module.exports = CreateMatpel