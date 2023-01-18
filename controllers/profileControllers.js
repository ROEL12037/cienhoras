const getProfilePage = (req, res) => {
    console.log(req.user)
    res.render('profile', {
        title: 'cienhoras - profile',
        name: req.user.firstName
    })
}

module.exports = {
    getProfilePage
}