var should = require('should'),
    request = require('supertest'),
    express = require('../config/express'),
    Customer = require('../models/customerSchema.js');

/* Global variables */
var app, agent, uid;

/* Unit tests for testing server side routes for the customer API */
describe('Customer CRUD Tests', function() {

    this.timeout(10000);

    before(function(done) {
        app = express.init();
        agent = request.agent(app);

        done();
    });

    it('should be able to retrieve all customers', function(done) {
        agent.get('/api/customers/')
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                done();
            });
    });

    it('should be able to retrieve a single customer', function(done) {
        Customer.findOne({name: "Dorian Meade"}, function(err, customer) {
            if (err) console.log(err);
            else {
                agent.get('/api/customers/' + customer.uid)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err);
                        should.exist(res);
                        res.body.name.should.equal('Dorian Meade');
                        res.body.email.should.equal('dorianmeade@aol.com');
                        res.body.phone.should.equal('555-555-5555');
                        done();
                    });
            }
        })
    });

    it('should be able to save a customer', function(done) {
        var customer = {
            uid: 69,
            credentials: {
                username: "ziggy",
                password: "majortom"
            },
            name: "David Bowie",
            email: "davidbowie@blackstar.com",
            phone: "123-456-7890"
        };
        agent.post('/api/customers')
            .send(customer)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res.body._id);
                res.body.name.should.equal('David Bowie');
                res.body.email.should.equal('davidbowie@blackstar.com');
                res.body.phone.should.equal('123-456-7890');
                uid = res.body.uid;
                done();
            })
    });

    it('should be able to update a customer', function(done) {
        var updatedCustomer = {
            uid: 69,
            credentials: {
                username: "ziggy",
                password: "majortom"
            },
            name: "David Bowie",
            email: "starman@blackstar.com",
            phone: "123-456-7890"
        };
        agent.put('/api/customers/' + uid)
            .send(updatedCustomer)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res.body._id);
                res.body.name.should.equal('David Bowie');
                res.body.email.should.equal('starman@blackstar.com');
                res.body.phone.should.equal('123-456-7890');
                done();
            });
    });

    it('should be able to delete a customer', function(done) {
        agent.delete('/api/customers/' + uid)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                agent.get('/api/customers/' + uid)
                    .expect(400)
                    .end(function(err, res) {
                        uid = undefined;
                        done();
                    });
            });
    });

    after(function(done) {
        if(uid) {
            Customer.deleteOne({uid: uid}, function(err) {
                if (err) throw err;
            });
        }
        done();
    })
});