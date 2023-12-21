const mongoose = require('mongoose')

const Schema = mongoose.Schema

const glazeSchema = new Schema({
    brand: {
        type: String
    },
    color: {
        type: String
    },
    itemNumber: {
        Type: Number
    },
    style : {
        type: string,
        enum: ['Opaque', 'Gloss', 'Transparent']
    }
}, {
    timestamps: true
})