var should = require('should'), 
    mongoose = require('mongoose'), 
    Item = require('../models/itemSchema'), 
    config = require('../config/config');

var item, id;

item = {
    "id": 87, 
    "vid": 3, 
    "name": "Hot Coffee",
    "type": "Snack", 
    "base_price": 3,
    "addons": {
        "supersize": {
            "size": "Upgrade to venti",
            "upcharge": 2
        },
        "extra": {
            "name": "Add ice", 
            "price": 1
        }
    }
}

describe('Item Schema Unit Tests', function() {

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
      new Item(item).save(function(err, item){
        should.not.exist(err);
        id = item._id;
        done();
      });
    });

    it('throws an error when id not provided', function(done){
      new Item({
        vid: item.vid,
        name: item.name,
        type: item.type,
        base_price: item.base_price,
      }).save(function(err){
        should.exist(err);
        done();
      })
    });

    it('throws an error when vid not provided', function(done){
        new Item({
          id: item.id,
          name: item.name,
          type: item.type,
          base_price: item.base_price,
        }).save(function(err){
          should.exist(err);
          done();
        })
      });  

      it('throws an error when name not provided', function(done){
        new Item({
          id: item.id,
          vid: item.vid,
          type: item.type,
          base_price: item.base_price,
        }).save(function(err){
          should.exist(err);
          done();
        })
      });  

      it('throws an error when not type provided', function(done){
        new Item({
          id: item.id,
          vid: item.vid,
          name: item.name,
          base_price: item.base_price,
        }).save(function(err){
          should.exist(err);
          done();
        })
      });
  
      it('throws an error when base price not provided', function(done){
        new Item({
          id: item.id,
          vid: item.vid,
          name: item.name,
          type: item.type,
        }).save(function(err){
          should.exist(err);
          done();
        })
      });  

  });

  afterEach(function(done) {
    if(id) {
      Item.deleteOne({ _id: id }).exec(function() {
        id = null;
        done();
      });
    } else {
      done();
    }
  });
});
