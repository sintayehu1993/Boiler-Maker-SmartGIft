// apiRoutes/customers.js
const router = require('express').Router();

// matches GET requests to /api/customers/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /api/customers/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/customers/:customerId
router.put('/:customerId', function (req, res, next) { /* etc */});
// matches DELETE requests to /api/customers/:customerId
router.delete('/:customerId', function (req, res, next) { /* etc */});

module.exports = router;