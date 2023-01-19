const cloudinary = require("../config/cloudinary");
const Post = require('../models/PostModel');
const { post } = require("../routes/postRoutes");

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
        res.render('error/500')
    }
}

const getEditPostPage = async (req, res) => {
    const postToEdit = await Post.findOne({
        _id: req.params.id
    }).lean()

    if (!postToEdit) {
        return res.render('error/404')
    }

    if (postToEdit.user != req.user.id) {
        res.redirect('/feed')
    } else {
        res.render('edit', {
            title: 'cienhoras - edit',
            postToEdit
        })
    }
}

module.exports = {
    getAddPostPage,
    addPost, 
    getEditPostPage
}