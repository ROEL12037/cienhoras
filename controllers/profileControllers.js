const Post = require('../models/PostModel')

const getProfilePage = async (req, res) => {
    // console.log(req.user)
    try {
        const posts = await Post.find({ user: req.user.id }).lean()
        res.render('profile', {
            title: 'cienhoras - profile',
            name: req.user.firstName, 
            posts,
            loggedIn: req.user._id.valueOf()
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
}

const getUserPage = async (req, res) => {
    try {
        let userPosts = await Post.find({user: req.params.id})
            .populate('user')
            .lean()
        res.render('user', {
            title: 'cienhoras - user', 
            userPosts
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getProfilePage,
    getUserPage
}