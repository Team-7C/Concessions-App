var should = require('should'), 
    mongoose = require('mongoose'), 
    Transaction = require('../models/transactionSchema'), 
    config = require('../config/config');

/*** Unit Tests ***/

var transaction, id;

transaction = {
    tid: 69,
    uid: 420,
    items: [{id:  1}],
    subtotal: 10.00,
}

describe('Transaction Schema Unit Tests', function() {

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
      new Transaction(transaction).save(function(err, transaction){
        should.not.exist(err);
        id = transaction._id;
        done();
      });
    });

    it('throws an error when tid not provided', function(done){
      new Transaction({
        uid: transaction.uid,
        items: transaction.items,
        subtotal: transaction.subtotal,
      }).save(function(err){
        should.exist(err);
        done();
      });
    });

    it('throws an error when uid not provided', function(done){
        new Transaction({
            tid: transaction.tid,
            items: transaction.items,
            subtotal: transaction.subtotal,
        }).save(function(err){
          should.exist(err);
          done();
        });
    });
  
    it('throws an error when items not provided', function(done){
        new Transaction({
            tid: transaction.tid,
            uid: transaction.uid,
            items: {},
            subtotal: transaction.subtotal,
        }).save(function(err){
          should.exist(err);
          done();
        });
    });
  
    it('throws an error when subtotal not provided', function(done){
        new Transaction({
            tid: transaction.tid,
            uid: transaction.uid,
            items: transaction.items,
        }).save(function(err){
          should.exist(err);
          done();
        });
    });

  });

  afterEach(function(done) {
    if(id) {
      Transaction.deleteOne({ _id: id }).exec(function() {
        id = null;
        done();
      });
    } else {
      done();
    }
  });
});
