const getAddPostPage = (req, res) => {
    res.render('add', {
        title: 'cienhoras - add'
    })
}

module.exports = {
    getAddPostPage
}