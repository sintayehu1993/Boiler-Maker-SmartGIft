
// apiRoutes/stores.js
const router = require('express').Router();


// matches GET requests to /api/stores/
router.get('/', function (req, res, next) { /* etc */});


// matches POST requests to /api/stores/
router.post('/', function (req, res, next) { /* etc */});


// matches PUT requests to /api/stores/:storeId
router.put('/:storeId', function (req, res, next) { /* etc */});


// matches DELETE requests to /api/stores/:storeId
router.delete('/:storeId', function (req, res, next) { /* etc */});

module.exports = router;