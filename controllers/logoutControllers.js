const passport = require('passport')

const logoutAttempt = (req, res, next) => {

    req.logout((err) => {
        if(err) {
            return next(err)
        }
        res.redirect('/')
    })
}

module.exports = {
    logoutAttempt
}