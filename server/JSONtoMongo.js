'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    config = require('./config/config.js'),

    Customer = require('./models/customerSchema.js'), 
    Vendor = require('./models/vendorSchema.js'), 
    AllItem = require('./models/itemSchema.js'), 

    cust = require('./models/custData.json'),
    vend = require('./models/vendData.json'),
    item = require('./models/itemData.json');

/* Connect to your database using mongoose - remember to keep your key secret*/

mongoose.connect(config.db.uri, {useNewUrlParser: true});
/*
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

for (var i = 0; i < cust.customers.length; i++)
{
  var newEntry = Customer({
    uid : cust.customers[i].uid,
    credentials: cust.customers[i].credentials,
    name : cust.customers[i].name,
    email : cust.customers[i].email,
    phone : cust.customers[i].phone
  })

  newEntry.save(function(err)
  {
    if (err) throw err;
  });
}

for (var i = 0; i < vend.vendors.length; i++)
{
  var newEntry = Vendor({
    vid : vend.vendors[i].vid,
    credentials: vend.vendors[i].credentials,
    name : vend.vendors[i].name,
    phone : vend.vendors[i].phone
  })

  newEntry.save(function(err)
  {
    if (err) throw err;
  });
}
/*
for (var i = 0; i < item.items.length; i++)
{
  var newEntry = AllItem({
    id : item.items[i].id,    
    vid : item.items[i].vid,
    name : item.items[i].name,
    type : item.items[i].type,
    base_price : item.items[i].base_price,
    addons : item.items[i].addons
  })

  newEntry.save(function(err)
  {
    if (err) throw err;
  });
}

*/
/*  
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
