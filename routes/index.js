const router = require('express').Router()

router.use('/api', require('./api-routes'))
router.use('/*', require('./public-routes'))

module.exports = router;
