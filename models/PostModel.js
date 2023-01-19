const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, 
    event: {
        type: String,
        required: true,
        trim: true
    }, 
    eventInfo: {
        type: String, 
        required: true
    },
    image: {
        type: String, 
        required: true
    },
    cloudinaryID: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', PostSchema)