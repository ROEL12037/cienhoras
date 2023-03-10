module.exports = {
    ensureAuth: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next()
        } else {
            res.redirect('/login')
        }
    },
    ensureGuest: (req, res, next) => {
        if (req.isAuthenticated()) {
            res.redirect('/profile')
        } else {
            return next()
        }
    }
}