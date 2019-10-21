const Kelas = require("../../models/kelas.model")
const API = require("../../core/actions.core")

class Search extends API {
    constructor() {
        super(Kelas)
    }

    async exec(req, res, next) {
        try {
            let params = {}
            let { nama } = req.query

            if(nama) {
                params.nama = {
                    $regex: `${nama}`,
                    $options: 'i'
                } 
            }


            let data = await this.search(params) // get function from parent class
            // console.log(`data ${JSON.stringify(data)}`)

            return res.send({
                code: 200,
                status: "success",
                data
            })
        } catch(err) {
            return res.send({
                code: 400,
                status: "error",
                message: err.message
            })
        }
    }
}

module.exports = Search