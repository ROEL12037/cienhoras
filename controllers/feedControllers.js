const Post = require('../models/PostModel')

const getFeedPage = async (req, res) => {
    try {
        const allPosts = await Post.find({})
            .populate('user')
            .sort({ createdAt: 'desc' })
            .lean()
        res.render('feed', {
            title: 'cienhoras - feed',
            allPosts: allPosts
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
}

module.exports = {
    getFeedPage
}