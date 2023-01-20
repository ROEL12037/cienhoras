const cloudinary = require("../config/cloudinary");
const Post = require('../models/PostModel');

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
            cloudinaryID: result.public_id
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

const editPost = async (req, res) => {
    console.log(req)
    let postToUpdate = await Post.findById(req.params.id).lean()

    if (!postToUpdate) {
        res.render('error/404')
    }

    if (postToUpdate.user != req.user.id) {
        res.redirect('/feed')
    } else {
        try {
            if (!req.file) {
                postToUpdate = await Post.findOneAndUpdate({_id: req.params.id}, {
                    event: req.body.event,
                    eventInfo: req.body.eventInfo
                })
            } else {
                const result = await cloudinary.uploader.upload(req.file.path, {
                    public_id: postToUpdate.cloudinaryID,
                    overwrite: true
                })
                postToUpdate = await Post.findOneAndUpdate({_id: req.params.id}, {
                    event: req.body.event,
                    eventInfo: req.body.eventInfo
                })
            }
            res.redirect('/profile')
        } catch (error) {
            console.error(error)
        }
    }
}

const deletePost = async (req, res) => {
    try {
        let postToDelete = await Post.findById(req.params.id).lean()
        await cloudinary.uploader.destroy(postToDelete.cloudinaryID)
        await Post.findOneAndDelete({_id: req.params.id})
        res.redirect('/profile')
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getAddPostPage,
    addPost, 
    getEditPostPage, 
    editPost,
    deletePost
}