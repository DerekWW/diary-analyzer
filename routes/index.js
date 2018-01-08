const router = require('express').Router()

router.use('/api/users', require('./api/users'))
router.use('/', require('./api/home'))

module.exports = router
