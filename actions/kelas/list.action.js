const Kelas = require('../../models/kelas.model')
const API = require('../../core/kelas.core')

class List extends API{
    constructor(){
        super(Kelas)
    }

    async exec(req, res, next){
        try{
            let params = {}
            let search = {}

            let limit = parseInt(req.query.limit)
            if(!limit){
                params.limit = 30
            }else{
                params.limit = limit
            }

            let page = parseInt(req.query.page)
            if(!page){
                params.page = 1
            }else{
                params.page = page
            }

            let data = await this.list(search, params)

            let meta = {
                total: data.total,
                limit: data.limit,
                page: data.page,
                pages: data.pages
            }

            return res.send({
                code: 200,
                status: 'Berhasil!',
                data,
                meta
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

module.exports = List