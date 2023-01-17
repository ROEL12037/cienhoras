const router = require('express').Router()
const {getIndexPage} = require('../controllers/indexControllers')

// desc         landing page
// router       get /
router.get('/', getIndexPage)

module.exports = router