'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    config = require('./config/config.js'),
    crypto = require('crypto'),

    Customer = require('./models/customerSchema.js'), 
    Vendor = require('./models/vendorSchema.js'), 
    Item = require('./models/itemSchema.js'),
    Transaction = require('./models/transactionSchema.js'),

    cust = require('../client/src/data/custData.json'),
    vend = require('../client/src/data/vendData.json'),
    item = require('../client/src/data/itemData.json'),
    transaction = require('../client/src/data/tranData.json');

/* Connect to your database using mongoose - remember to keep your key secret*/

mongoose.connect(config.db.uri, {useNewUrlParser: true});
mongoose.set('useUnifiedTopology', true);

/*
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

/*** Password Salting Functions ***/

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

for (var i = 0; i < cust.customers.length; i++) {
  var newEntry = Customer({
    uid : cust.customers[i].uid,
    credentials: cust.customers[i].credentials,
    name : cust.customers[i].name,
    phone : cust.customers[i].phone,
    email : cust.customers[i].email
  });

  /* Update credentials to be secure */
  var salt = saltShaker(20);
  newEntry.credentials.salt = salt;
  newEntry.credentials.password = hashPass(newEntry.credentials.password, salt);

  newEntry.save(function(err) {
    if (err) throw err;
  });
}

for (var i = 0; i < vend.vendors.length; i++) {
  var newEntry = Vendor({
    vid : vend.vendors[i].vid,
    credentials: vend.vendors[i].credentials,
    name : vend.vendors[i].name,
    phone : vend.vendors[i].phone,
    email : vend.vendors[i].email
  });

  /* Update credentials to be secure */
  var salt = saltShaker(20);
  newEntry.credentials.salt = salt;
  newEntry.credentials.password = hashPass(newEntry.credentials.password, salt)

  newEntry.save(function(err) {
    if (err) throw err;
  });
}

for (var i = 0; i < item.items.length; i++) {
  var newEntry = Item({
    id : item.items[i].id,    
    vid : item.items[i].vid,
    name : item.items[i].name,
    type : item.items[i].type,
    base_price : item.items[i].base_price,
    addons : item.items[i].addons
  });

  newEntry.save(function(err) {
    if (err) throw err;
  });
}

for (var i = 0; i < transaction.transactions.length; i++) {
  var newEntry = Transaction({
    tid : transaction.transactions[i].tid,    
    uid : transaction.transactions[i].uid,
    items : transaction.transactions[i].items,
    subtotal : transaction.transactions[i].subtotal,
    time : transaction.transactions[i].time
  });

  newEntry.save(function(err) {
    if (err) throw err;
  });
}

/*  
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
