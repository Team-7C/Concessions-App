/* This is the file for the transaction data router */

var transaction = require('../controllers/transaction.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .get(transaction.list)
    .post(transaction.create);

router.route('/:transactionTID')
    .get(transaction.read)
    .put(transaction.update)
    .delete(transaction.delete);

router.param('transactionTID', transaction.transactionByTID);

module.exports = router;