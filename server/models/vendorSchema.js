/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

// Create your schema for the data in the listings.json file that will define how data is saved in your database
var vendorSchema = new Schema({
  vid: { type: Number, required: true, unique: true},
  credentials: {
    username: {type: String, required: true},
    password: {type: String, required: true},
    salt: {type: String, required: true}
  },
  name: {type: String, required: true},
  email: String,
  phone: {type: String, required: true},
  created_at: Date,
  updated_at: Date
});

// Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
vendorSchema.pre('save', function(next) {
  var curr = new Date();
  this.updated_at = curr;
  if(!this.created_at)
    this.created_at = curr;
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Vendor = mongoose.model('Vendor', vendorSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Vendor;
