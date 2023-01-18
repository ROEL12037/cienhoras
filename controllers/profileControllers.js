const getProfilePage = (req, res) => {
    console.log(req.user)
    res.render('profile', {title: 'cienhoras - profile'})
}

module.exports = {
    getProfilePage
}