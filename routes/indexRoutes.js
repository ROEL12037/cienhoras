const router = require('express').Router()
const { getIndexPage } = require('../controllers/indexControllers')

// desc         landing page
// route        get /
router.get('/', getIndexPage)

module.exports = router