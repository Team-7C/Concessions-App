/* This is the file for the customer data router */

var customer = require('../controllers/customer.server.controller.js'),
    express = require('express'),
    router = express.router();

router.route('/customer/')
    .get(customer.list)
    .post(customer.create);

router.route('/customer/:customerUID')
    .get(customer.read)
    .put(customer.update)
    .delete(customer.delete);

router.param('customerUID', customer.customerByUID);