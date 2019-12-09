/* This controller dictates how the vendor data is handled with CRUD requests */

var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Vendor = require('../models/vendorSchema.js');
    
/*** Password Salting Functions (Tutorial: https://ciphertrick.com/salt-hash-passwords-using-nodejs-crypto/) ***/

/* Create a salt that is length-bytes long*/
function saltShaker(length) {
    return crypto.randomBytes(length).toString('hex');
};

/* Create a SHA512 hash of password for a given salt */
function hashPass(password, salt) {
    var hmac = crypto.createHmac('sha512', salt);
    hmac.update(password);
    return hmac.digest('hex');
};

/*** CRUD Operations ***/

/* Create a vendor */
exports.create = function(req, res) {

    /* Instantiate a new vendor */
    var vendor = new Vendor(req.body);

    /* Salt password before saving to database for security */ 
    var salt = saltShaker(20);
    vendor.credentials.salt = salt;
    vendor.credentials.password = hashPass(vendor.credentials.password, salt);

    /* Save the vendor to the database */
    vendor.save(function(err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        else res.json(vendor);
    });
};

/* Show a particular vendor */
exports.read = function(req, res) {
    /* Send the vendor as JSON from the request */
    res.json(req.vendor);
};

/* Update a vendor */
exports.update = function(req, res) {

    var vendor = req.vendor;

    /* Replace the vendor's properties with the new properties found in req.body */
    vendor.vid = req.body.vid;

    /* Salt password before saving to database for security */ 
    var salt = saltShaker(20);
    vendor.credentials.salt = salt;
    vendor.credentials.password = hashPass(req.body.credentials.password, salt);

    vendor.name = req.body.name;
    if (req.body.email) vendor.email = req.body.email;
    vendor.phone = req.body.phone;

    /* Save the vendor */
    vendor.save(function(err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        else res.json(vendor);
    });
};

/* Delete a vendor */
exports.delete = function(req, res) {

    var vendor = req.vendor;

    Vendor.remove({vid: vendor.vid}).then(vendor => {
        if (!vendor) return res.status(400).send({ message: "vendor not found!" });
        res.send({ message: "vendor deleted successfully!" });
    }).catch(err => { if (err) return err; });
};

/*** Useful search functions ***/

/* Retrieve all vendors in an alphabetically sorted list */
exports.list = function (req, res) {
    Vendor.find({}, function(err, vendor) {
        if (err) return err;
        res.send(vendor);
    }).sort({name: 1});
};

/* Find a vendor by vid and then pass it to the next request handler */
exports.vendorByVID = function(req, res, next, vid) {
    Vendor.findOne({vid: vid}).exec(function(err, vendor) {
        if (err) res.status(400).send(err);
        else {
            req.vendor = vendor;
            next();
        }
    });
}