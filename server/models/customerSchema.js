/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

// Create your schema for the data in the listings.json file that will define how data is saved in your database
var customerSchema = new Schema({
  uid: { type: Number, required: true, unique: true},
  credentials: {
    username: {type: String, required: [true, 'Username is required']},
    password: {type: String, required: [true, 'Password is required']},
    salt: {type: String, required: [true, 'Password salt is required']}
  },
  name: {type: String, required: [true, 'Name is required']}, 
  email: String,
  phone: {type: String, required: [true, "Phone number is required"]},
  created_at: Date,
  updated_at: Date
});

// Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
customerSchema.pre('save', function(next) {
  var curr = new Date();
  this.updated_at = curr;
  if(!this.created_at)
    this.created_at = curr;
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Customer = mongoose.model('Customer', customerSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Customer;
