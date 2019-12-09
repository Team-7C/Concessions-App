/* This controller dictates how the transaction data is handled with CRUD requests */

var mongoose = require('mongoose'),
    Transaction = require('../models/transactionSchema.js');

/*** CRUD Operations ***/

/* Create a transaction */
exports.create = function(req, res) {

    /* Instantiate a new transaction */
    var transaction = new Transaction(req.body);

    /* Save the transaction to the database */
    transaction.save(function(err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        else res.json(transaction);
    });
};

/* Show a particular transaction */
exports.read = function(req, res) {
    /* Send the transaction as JSON from the request */
    res.json(req.transaction);
};

/* Update a transaction */
exports.update = function(req, res) {

    var transaction = req.transaction;

    /* Replace the transaction's properties with the new properties found in req.body */
    transaction.tid = req.body.tid;
    transaction.uid = req.body.uid;
    transaction.items = req.body.items;
    transaction.subtotal = req.body.subtotal;
    if (req.body.time) transaction.time = req.body.time;

    /* Save the transaction */
    transaction.save(function(err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        else res.json(transaction);
    });
};

/* Delete a transaction */
exports.delete = function(req, res) {

    var transaction = req.transaction;

    Transaction.remove({tid: transaction.tid}).then(transaction => {
        if (!transaction) return res.status(400).send({ message: "Transaction not found!" });
        res.send({ message: "Transaction deleted successfully!" });
    }).catch(err => { if (err) return err; });
};

/*** Useful search functions ***/

/* Retrieve all transactions in an alphabetically sorted list */
exports.list = function (req, res) {
    Transaction.find({}, function(err, transaction) {
        if (err) return err;
        res.send(transaction);
    }).sort({tid: 1});
};

/* Find a transaction by tid and then pass it to the next request handler */
exports.transactionByTID = function(req, res, next, tid) {
    Transaction.findOne({tid: tid}).exec(function(err, transaction) {
        if (err) res.status(400).send(err);
        else {
            req.transaction = transaction;
            next();
        }
    });
}