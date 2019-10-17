const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate')

let kelasSchema = new Schema({
    nama : String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

kelasSchema.plugin(mongoosePaginate)
let Kelas = mongoose.model('Kelas', kelasSchema)

module.exports = Kelas