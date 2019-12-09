var should = require('should'), 
    mongoose = require('mongoose'), 
    Vendor = require('../models/vendorSchema'), 
    crypto = require('crypto'),
    config = require('../config/config');

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

/*** Unit Tests ***/

var vendor, id;

vendor = {
    "vid": 69, 
    "credentials": {
        "username": "sub",
        "password": "way",
        "salt": "w/e"
    },
    "name": "Subway Restaraunts", 
    "phone": "777-777-7777"
}

var salt = saltShaker(20);
vendor.credentials.salt = salt;
vendor.credentials.password = hashPass(vendor.credentials.password, salt);

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
            salt: vendor.credentials.salt
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
              salt: vendor.credentials.salt
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
              salt: vendor.credentials.salt
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
