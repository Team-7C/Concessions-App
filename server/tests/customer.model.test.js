var should = require('should'), 
    mongoose = require('mongoose'), 
    Customer = require('../models/customerSchema'), 
    config = require('../config/config');

var customer, id;

customer = {
    "uid": 87,
    "credentials": {
        "username": "joe", 
        "password": "biden"
    }, 
    "name": "Joe Biden",
    "email": "helllllaaaa@yahoo.com",
    "phone": "555-002-2451"
}

describe('Customer Schema Unit Tests', function() {

  before(function(done) {
    mongoose.connect(config.db.uri, { useNewUrlParser: true });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useUnifiedTopology', true);
    done();
  });

  describe('Saving to database', function() {

    this.timeout(10000);

    it('saves properly when all required properties provided', function(done){
      new Customer(customer).save(function(err, customer){
        should.not.exist(err);
        id = customer._id;
        done();
      });
    });

    it('throws an error when uid not provided', function(done){
      new Customer({
        credentials: {
            username: customer.username,
            password: customer.password,
        },
        name: customer.name,
        phone: customer.phone,
      }).save(function(err){
        should.exist(err);
        done();
      })
    });

    it('throws an error when credentials not provided', function(done){
      new Customer({
        uid: customer.uid,
        name: customer.name,
        phone: customer.phone,
      }).save(function(err){
        should.exist(err);
        done();
      })
    });

    it('throws an error when name not provided', function(done){
        new Customer({
          uid: customer.uid,
          credentials: {
              username: customer.username,
              password: customer.password,
          },
          phone: customer.phone,
        }).save(function(err){
          should.exist(err);
          done();
        })
      });

      it('throws an error when phone number not provided', function(done){
        new Customer({
          uid: customer.uid,
          credentials: {
              username: customer.username,
              password: customer.password,
          },
          name: customer.name,
        }).save(function(err){
          should.exist(err);
          done();
        })
      });

  });

  afterEach(function(done) {
    if(id) {
      Customer.deleteOne({ _id: id }).exec(function() {
        id = null;
        done();
      });
    } else {
      done();
    }
  });
});
