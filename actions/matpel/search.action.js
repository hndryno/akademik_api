const Kelas = require('../../models/mata_pelajaran.model')
const API = require('../../core/actions.core')

class Search extends API{
    constructor(){
        super(Kelas)
    }

    async exec(req, res, next) {
        try{
            let params = {}
            let {nama, guru, kelas} = req.query

            if(nama){
                params.nama = {
                    $regex: `${nama}`,
                    $options: `i` 
                }
            }

            if(guru){
                params.guru = {
                    $regex: `${guru}`,
                    $options: `i` 
                }
            }

            if(kelas){
                params.kelas = {
                    $regex: `${kelas}`,
                    $options: `i` 
                }
            }

            let data = await this.search(params)

            return res.send({
                code: 200,
                status: 'Berhasil!',
                data
            })
        }catch(e){
            return res.send({
                code: 400,
                status: 'error',
                message: e.message
            })
        }
    }
}

module.exports = Search