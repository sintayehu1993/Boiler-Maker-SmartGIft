const router = require('express').Router();

router.use('/stores', require('./stores'))
router.use('/customers', require('./customers'))

//this middle ware serves up anyone who requested unavaliable route request 
router.use(function (req, res, next ) {
    const error = new Error('Not found.')
    error.status = 404;
    next(error)
})



module.exports = router