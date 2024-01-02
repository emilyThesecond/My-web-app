const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema ({
    glazeTech: {
        type: String
    },
    firing: {
        type: String,
    },
    content: {
        type: String,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String
}, {
    timestamps: true
})

const glazeSchema = new Schema({
    brand: {
        type: String,
    },
        color: String,
    style : {
        type: String,
        enum: ['Opaque', 'Gloss', 'Transparent']
    },
    itemNumber: {
        type: Number
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
  })
module.exports = mongoose.model('Glaze', glazeSchema)