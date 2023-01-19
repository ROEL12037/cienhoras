const cloudinary = require("../config/cloudinary");
const Post = require('../models/PostModel')

const getAddPostPage = (req, res) => {
    res.render('add', {
        title: 'cienhoras - add'
    })
}

const addPost = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        await Post.create({
            user: req.user.id, 
            event: req.body.event, 
            eventInfo: req.body.eventInfo,
            image: result.secure_url,
            cloudinaryID: result.public_id,
        })
        console.log('added post')
        res.redirect('/profile')
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getAddPostPage,
    addPost
}