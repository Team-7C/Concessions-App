var should = require('should'), 
    mongoose = require('mongoose'), 
    Item = require('../models/itemSchema'), 
    config = require('../config/config');

var item, id;

item = {
    "id": 100, 
    "vid": 3, 
    "name": "Hot Coffee",
    "type": "Beverage", 
    "base_price": 3.19,
    "addons": [
      {
        "aid": 1,
        "desc": "Venti size",
        "upcharge": 1.09
      },
      {
        "aid": 2,
        "desc": "Add ice",
        "upcharge": 0
      }
    ]
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

    it('saves properly when all required properties are provided', function(done){
      new Item(item).save(function(err, item){
        should.not.exist(err);
        id = item._id;
        done();
      });
    });

    it('throws an error when id is not provided', function(done){
      new Item({
        vid: item.vid,
        name: item.name,
        type: item.type,
        base_price: item.base_price,
        addons: item.addons
      }).save(function(err){
        should.exist(err);
        done();
      });
    });

    it('throws an error when vid is not provided', function(done){
        new Item({
          id: item.id,
          name: item.name,
          type: item.type,
          base_price: item.base_price,
          addons: item.addons
        }).save(function(err){
          should.exist(err);
          done();
        });
      });  

      it('throws an error when name is not provided', function(done){
        new Item({
          id: item.id,
          vid: item.vid,
          type: item.type,
          base_price: item.base_price,
          addons: item.addons
        }).save(function(err){
          should.exist(err);
          done();
        });
      });  

      it('throws an error when type is not provided', function(done){
        new Item({
          id: item.id,
          vid: item.vid,
          name: item.name,
          base_price: item.base_price,
          addons: item.addons
        }).save(function(err){
          should.exist(err);
          done();
        });
      });
  
      it('throws an error when base price is not provided', function(done){
        new Item({
          id: item.id,
          vid: item.vid,
          name: item.name,
          type: item.type,
          addons: item.addons
        }).save(function(err){
          should.exist(err);
          done();
        });
      });

      it('does not throw an error when addons are not provided', function(done){
        new Item({
          id: item.id,
          vid: item.vid,
          name: item.name,
          type: item.type,
          base_price: item.base_price
        }).save(function(err){
          should.not.exist(err);
          done();
        });
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
