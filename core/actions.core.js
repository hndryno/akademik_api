class Action {
    constructor(model) {
        this.model = model
    }

    async create(data){
        try{
            let result  = new this.model(data)
            await result.save()

            return result
        }catch(e){
            throw e
        }
    }

    async list(){
        try{
            let result = await this.model.paginate(
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

    async show(id){
        try{
            let result = await this.model.findOne({
                _id: id
            }).exec()
            
            return result
        }catch(e){
            throw e
        }
    }

    async update(id, data){
        try{
            let query = await this.model.findOneAndUpdate({
                _id: id
            }, data,{new: true}).exec()

            return query
        }catch(e){
            throw e
        }
    }

    async delete(id){
        try{
            let result = await this.model.findOneAndDelete({
                _id: id 
            }).exec()

            return result
        }catch(e){
            throw e
        }
    }

    async search(params){
        try{
            let data = await this.model.find(
                params
            ).exec()

            return data
        }catch(e){
            throw e
        }
    }
}

module.exports = Action