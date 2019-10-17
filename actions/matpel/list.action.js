let Matpel = require('../../models/mata_pelajaran.model')

class ListMatpel{
    constructor(search, params){
        this.search = search
        this.params = params 
    }

    async exec(){
        try{
            let result = await Matpel.paginate(
                this.search,
                this.params
            ).then(res => {
                return{
                    data: res.docs,
                    total: res.total,
                    limit: res.limit,
                    page: res.page,
                    pages: res.pages
                }
            })

            return result
        }catch(e){
            throw e
        }
    }
}

module.exports = ListMatpel

