/* This controller dictates how the customer data is handled with CRUD requests */

var mongoose = require('mongoose'),
    Customer = require('../models/customerSchema.js');
    
/*** CRUD Operations ***/

/* Create a customer */
exports.create = function(req, res) {

    /* Instantiate a new customer */
    var customer = new Customer(req.body);

    /* TODO: Salt password before saving to database for security */ 

    /* Save the customer to the database */
    customer.save(function(err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        else {
            console.log(customer);
            res.json(customer);
        }
    });
};

/* Show a particular customer */
exports.read = function(req, res) {
    /* Send the customer as JSON from the request */
    res.json(req.customer);
};

/* Update a customer */
exports.update = function(req, res) {

    var customer = req.customer;

    /* Replace the customer's properties with the new properties found in req.body */
    customer.uid = req.body.uid;
    customer.credentials = {
        username: req.body.credentials.username,
        password: req.body.credentials.password,
    };
    customer.name = req.body.name;
    if (req.body.email) customer.email = req.body.email;
    customer.phone = req.body.phone;

    /* Save the customer */
    customer.save(function(err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        else {
            console.log(customer);
            res.json(customer);
        }
    });
};

/* Delete a customer */
exports.delete = function(req, res) {

    var customer = req.customer;

    Customer.remove({uid: customer.uid}).then(customer => {
        if (!customer) return res.status(400).send({ message: "Customer not found!" });
        res.send({ message: "Customer deleted successfully!" });
    }).catch(err => { if (err) return err; });
};
/*** End of CRUD operations ***/

/*** Useful search functions ***/

/* Retrieve all customers in an alphabetically sorted list */
exports.list = function (req, res) {
    Customer.find({}, function(err, customer) {
        if (err) return err;
        res.send(customer);
    }).sort( { name: 1 } );
};


/* Find a customer by uid and then pass it to the next request handler */
exports.customerByUID = function(req, res, next, uid) {
    Customer.findOne({uid: uid}).exec(function(err, customer) {
        if (err) res.status(400).send(err);
        else {
            res.customer = customer;
            next();
        }
    });
}