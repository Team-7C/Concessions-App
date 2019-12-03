/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

// Create your schema for the data in the listings.json file that will define how data is saved in your database
var transactionSchema = new Schema({
  tid: {type: Number, required: [true, 'Transaction ID is required'], unique: [true, 'Transaction ID must be unique']},
  uid: {type: Number, required: [true, "Customer ID is required"] }, // Customer who made transaction
  items: [
    {
      id: {type: Number, required: [true, 'At least one item is required']}, // Unique item
      quantity: {type: Number, default: 1},                                  // Number of instances in transaction
      addons: [{aid: Number}]                                                // Addons (that have upcharges) applied to item
    }
  ],
  subtotal: { type: Number, required: [true, 'Transaction subtotal is required'] },
  time: {type: Date, default: Date.now}, 
  created_at: Date,
  updated_at: Date
});

// Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
transactionSchema.pre('save', function(next) {
  var curr = new Date();
  this.updated_at = curr;
  if(!this.created_at)
    this.created_at = curr;
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Transaction = mongoose.model('Transaction', transactionSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Transaction;