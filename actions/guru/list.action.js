const Guru = require('../../models/guru.model')
const API = require('../../core/actions.core')

class List extends API{
    constructor() {
       super(Guru)
    }

    async exec(req, res, next){
        try{
            let params = {}
            let search = req.query

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
            throw e
        }
    }
}

module.exports = List