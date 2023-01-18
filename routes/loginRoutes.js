const router = require('express').Router()
const passport = require('passport')
const { getLoginPage } = require('../controllers/loginControllers')
const { ensureGuest } = require('../middleware/auth')

// desc         login page
// route        get /login
router.get('/', ensureGuest, getLoginPage)

// desc         authenticate with google
// route        get /login/google
router.get('/google', passport.authenticate('google', {scope: ['profile'], prompt: "select_account"}))

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