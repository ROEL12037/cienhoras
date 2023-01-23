const Post = require('../models/PostModel')
const User = require('../models/UserModel')
const {shortenTitle} = require('../middleware/helpers')


const getProfilePage = async (req, res) => {
    try {
        const posts = await Post.find({ user: req.user.id }).lean()

        await shortenTitle(posts)

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
        let userInfo = await User.find({_id: req.params.id}).lean()

        let userPosts = await Post.find({user: req.params.id})
            .populate('user')
            .lean()

        await shortenTitle(userPosts)

        res.render('user', {
            title: 'cienhoras - user', 
            userInfo,
            userPosts,
        })
        
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getProfilePage,
    getUserPage
}