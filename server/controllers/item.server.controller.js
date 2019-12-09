/* This controller dictates how the item data is handled with CRUD requests */

var mongoose = require('mongoose');
    Item = require('../models/itemSchema.js');

/*** CRUD Operations ***/

/* Create an item */
exports.create = function(req, res) {

    /* Instantiate a new item */
    var item = new Item(req.body);

    /* Save the item to the database */
    item.save(function(err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        else res.json(item);
    });
};

/* Show a particular item */
exports.read = function(req, res) {
    /* Send the item as JSON from the request */
    res.json(req.item);
};

/* Update an item */
exports.update = function(req, res) {

    var item = req.item;

    /* Replace the item's properties with the new properties found in req.body */
    item.id = req.body.id;
    item.vid = req.body.vid;
    item.name = req.body.name;
    item.type = req.body.type;
    item.base_price = req.body.base_price;
    if (req.body.addons) item.addons = req.body.addons;

    /* Save the item */
    item.save(function(err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        else res.json(item);
    });
};

/* Delete an item */
exports.delete = function(req, res) {
    
    var item = req.item;

    Item.remove({id: item.id}).then(item => {
        if (!item) return res.status(400).sennd({ message: "Item not found!" });
        res.send({ message: "Item deleted successfully!" });
    }).catch(err => { if (err) return err; });
};

/*** Useful search functions ***/

/* Retrieve all items in an alphabetically sorted list */
exports.list = function(req, res) {
    Item.find({}, function(err, item) {
        if (err) return err;
        res.send(item);
    }).sort({ name: 1 });
};

/* Find an item by id and pass it to the next request handler */
exports.itemByID = function(req, res, next, id) {
    Item.findOne({id: id}).exec(function(err, item) {
        if (err) res.status(400).send(err);
        else {
            req.item = item;
            next();
        }
    });
};