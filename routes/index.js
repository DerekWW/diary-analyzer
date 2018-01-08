const router = require('express').Router()

router.use('/', require('./api/home'))

module.exports = router
