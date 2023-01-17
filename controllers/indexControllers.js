const getIndexPage = (req, res) => {
    res.render('index', {title: 'cienhoras'})
}

module.exports = {
    getIndexPage
}