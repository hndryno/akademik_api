const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate')

let userSchema = new Schema({
    nama: String,
    email: String,
    password: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

userSchema.plugin(mongoosePaginate)
let User = mongoose.model('User', userSchema)

module.exports = User