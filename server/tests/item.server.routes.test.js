var should = require('should');
    request = require('request');
    express = require('../config/express');
    Item = require('../models/itemSchema.js');

/* Global variables */
var app, agent, id;

/* Unit tests for testing server side routes for the item API */
describe('Item CRUD Tests', function() {

    this.timeout(10000);

    before(function(done) {
        app = express.init();
        agent = request.agent(app);

        done();
    });

    it('should be able to retrieve all items', function(done) {
        agent.get('/api/items/')
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                // TODOL Make more thorough test for this part
                done();
            });
    });

    it('should be able to retrieve a single item', function(done) {
        Item.findOne({id: 1}, function(err, item) {
            if (err) console.log(err);
            else {
                agent.get('/api/items/' + item.id)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err);
                        should.exist(res);
                        res.body.vid.should.equal(1);
                        res.body.name.should.equal("Cheese Pizza");
                        res.body.type.should.equal("Meal");
                        res.body.base_price.should.equal(8);
                        res.body.addons[0].desc.should.equal("Large size");
                        res.body.addons[1].desc.should.equal("Cheese crust");
                        res.body.addons[2].desc.should.equal("Add pepperoni");
                        done();
                    });
            }
        });
    });

    it('should be able to save an item', function(done) {
        var item = {
            id: 69,
            vid: 70,
            name: "Hotdog",
            type: "Entree",
            base_price: 5,
            addons: [
                {
                    selected: false,
                    desc: "Add relish",
                    upcharge: 0.50,
                }
            ]
        };
        agent.post('/api/items')
            .send(item)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res.body._id);
                res.body.name.should.equal('Hotdog');
                res.body.type.should.equal('Entree');
                res.body.base_price.should.equal(5);
                id = res.body.id;
                done();
            });
    });

    it('should be able to update an item', function(done) {
        var updatedItem = {
            id: 69,
            vid: 70,
            name: "Hotdog",
            type: "Entree",
            base_price: 5.5,
            addons: [
                {
                    selected: false,
                    desc: "Add relish",
                    upcharge: 0.50,
                }
            ]
        }
    });
    
});
