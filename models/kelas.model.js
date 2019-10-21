const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate')

let kelasSchema = new Schema({
    nama : String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

kelasSchema.methods.toJSON = function() {
    const kelas = this
    const kelasObject = kelas.toObject()    

    delete kelasObject.created_at
    delete kelasObject.updated_at

    return kelasObject
}

kelasSchema.plugin(mongoosePaginate)
let Kelas = mongoose.model('Kelas', kelasSchema)

module.exports = Kelas