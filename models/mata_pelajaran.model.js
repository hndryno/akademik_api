const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate')

let matpelSchema = new Schema({
    nama : String,
    guru: String,
    kelas: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

matpelSchema.plugin(mongoosePaginate)
let Matpel = mongoose.model('Matpel', matpelSchema)

module.exports = Matpel