const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate')

let guruSchema = new Schema({
    nama: String,
    umur: Number,
    jenis_kelamin: String,
    alamat: String,
    banyak_pelajaran:{
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

guruSchema.plugin(mongoosePaginate)
let Guru = mongoose.model('Guru', guruSchema)

module.exports = Guru