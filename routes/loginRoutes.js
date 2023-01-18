const router = require('express').Router()
const passport = require('passport')
const { getLoginPage } = require('../controllers/loginControllers')

// desc         login page
// route        get /login
router.get('/', getLoginPage)

// desc         authenticate with google
// route        get /login/google
router.get('/google', passport.authenticate('google', {scope: ['profile']}))

// desc         authenticate with google
// route        get /login/google/callback
router.get(
    '/google/callback', 
    passport.authenticate('google', {failureRedirect: '/login'}), 
    (req, res) => {
        res.redirect('/profile')
    }
)


module.exports = router