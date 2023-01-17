const getProfilePage = (req, res) => {
    res.render('profile', {title: 'cienhoras - profile'})
}

module.exports = {
    getProfilePage
}