/* This is the file for the customer data router */

var customer = require('../controllers/customer.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .get(customer.list)
    .post(customer.create);

router.route('/:customerUID')
    .get(customer.read)
    .put(customer.update)
    .delete(customer.delete);

router.param('customerUID', customer.customerByUID);

module.exports = router;