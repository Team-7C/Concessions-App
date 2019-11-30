/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

// Create your schema for the data in the listings.json file that will define how data is saved in your database
var itemSchema = new Schema({
  id: {type: Number, required: [true, 'ID is required'], unique:true},
  vid: {type: Number, required: [true, 'VID is required']},
  name: {type: String, required: [true, 'Name is required']}, 
  type: {type: String, required: [true, 'Type is required']},
  base_price: {type: Number, required: [true, 'Base price is required']},
  addons: [{aid: Number, desc: String, upcharge: Number}],
  created_at: Date,
  updated_at: Date
});

// Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
itemSchema.pre('save', function(next) {
  var curr = new Date();
  this.updated_at = curr;
  if(!this.created_at)
    this.created_at = curr;
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Item = mongoose.model('Item', itemSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Item;