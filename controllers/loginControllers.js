const getLoginPage = (req, res) => {
    res.render('login', {title: 'cienhoras - login'})
}

module.exports = {
    getLoginPage
}