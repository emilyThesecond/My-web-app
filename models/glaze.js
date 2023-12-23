const mongoose = require('mongoose')

const Schema = mongoose.Schema

const glazeSchema = new Schema({
    brand: {
        type: String
    },
    color: {
        type: String
    },
    style : {
        type: String,
        enum: ['Opaque', 'Gloss', 'Transparent']
    },
    itemNumber: {
        type: Number
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Glaze', glazeSchema)