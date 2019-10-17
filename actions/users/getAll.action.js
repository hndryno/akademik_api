const User = require('../../models/user.model')

class getAll{
    constructor(){
        
    }

    async exec(){
        try{
            let query = await User.find({}).exec()
            return query
        }catch(e){
            throw e
        }
    }
    
}

module.exports = getAll