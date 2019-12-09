var should = require('should');
    request = require('supertest');
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
                        res.body.name.should.equal("Cheese Pizza (11\")");
                        res.body.type.should.equal("Meal");
                        res.body.base_price.should.equal(8.99);
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
                    aid: 1,
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
            base_price: 5.25,
            addons: [
                {
                    aid: 1,
                    desc: "Add relish",
                    upcharge: 0.50,
                }
            ]
        };
        agent.put('/api/items/' + id)
            .send(updatedItem)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res.body._id);
                res.body.name.should.equal('Hotdog');
                res.body.type.should.equal('Entree');
                res.body.base_price.should.equal(5.25);
                done();
            });
    });

    it('should be able to delete an item', function(done) {
        agent.delete('/api/items/' + id)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                agent.get('/api/items/' + id)
                    .expect(400)
                    .end(function(err, res) {
                        id = undefined;
                        done();
                    });
            });
    });
    
    after(function(done) {
        if (id) {
            Item.deleteOne({id: id}, function(err) {
                if (err) throw err;
            });
        }
        done();
    });

});
