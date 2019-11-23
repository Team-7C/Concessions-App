var should = require('should'), 
    mongoose = require('mongoose'), 
    Vendor = require('../models/vendorSchema'), 
    config = require('../config/config');

var vendor, id;

vendor = {
    "vid": 69, 
    "credentials": {
        "username": "sub",
        "password": "way"
    },
    "name": "Subway Restaraunts", 
    "phone": "777-777-7777"
}

describe('Vendor Schema Unit Tests', function() {

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
      new Vendor(vendor).save(function(err, vendor){
        should.not.exist(err);
        id = vendor._id;
        done();
      });
    });

    it('throws an error when vid not provided', function(done){
      new Vendor({
        credentials: {
            username: vendor.credentials.username,
            password: vendor.credentials.password,
        },
        name: vendor.name,
        phone: vendor.phone,
      }).save(function(err){
        should.exist(err);
        done();
      });
    });

    it('throws an error when credentials not provided', function(done){
        new Vendor({
          vid: vendor.vid,
          name: vendor.name,
          phone: vendor.phone,
        }).save(function(err){
          should.exist(err);
          done();
        });
    });
  
    it('throws an error when name not provided', function(done){
        new Vendor({
          vid: vendor.vid,
          credentials: {
              username: vendor.credentials.username,
              password: vendor.credentials.password,
          },
          phone: vendor.phone,
        }).save(function(err){
          should.exist(err);
          done();
        });
    });
  
    it('throws an error when phone number not provided', function(done){
        new Vendor({
          vid: vendor.vid,
          credentials: {
              username: vendor.credentials.username,
              password: vendor.credentials.password,
          },
          name: vendor.name,
        }).save(function(err){
          should.exist(err);
          done();
        });
    });

  });

  afterEach(function(done) {
    if(id) {
      Vendor.deleteOne({ _id: id }).exec(function() {
        id = null;
        done();
      });
    } else {
      done();
    }
  });
});
