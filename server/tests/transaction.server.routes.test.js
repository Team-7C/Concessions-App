var should = require('should'),
    request = require('supertest'),
    express = require('../config/express'),
    Transaction = require('../models/transactionSchema.js');

/* Global variables */
var app, agent, tid;

/* Unit tests for testing server side routes for the transaction API */
describe('Transaction CRUD Tests', function() {

    this.timeout(10000);

    before(function(done) {
        app = express.init();
        agent = request.agent(app);

        done();
    });

    it('should be able to retrieve all transactions', function(done) {
        agent.get('/api/transactions/')
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                done();
            });
    });

    it('should be able to retrieve a single transaction', function(done) {
        Transaction.findOne({tid: 1}, function(err, transaction) {
            if (err) console.log(err);
            else {
                agent.get('/api/transactions/' + transaction.tid)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err);
                        should.exist(res);
                        res.body.tid.should.equal(1);
                        res.body.uid.should.equal(9);
                        res.body.subtotal.should.equal(23.49);
                        done();
                    });
            }
        })
    });

    it('should be able to save a transaction', function(done) {
        var transaction = {
            tid: 69,
            uid: 420,
            items: [{id:  1}],
            subtotal: 10.00,
        };
        agent.post('/api/transactions')
            .send(transaction)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res.body._id);
                res.body.tid.should.equal(69);
                res.body.uid.should.equal(420);
                res.body.subtotal.should.equal(10.00);
                tid = res.body.tid;
                done();
            })
    });

    it('should be able to update a transaction', function(done) {
        var updatedTransaction = {
            tid: 69,
            uid: 420,
            items: [{id:  1}],
            subtotal: 18.99,
        };
        agent.put('/api/transactions/' + tid)
            .send(updatedTransaction)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res.body._id);
                res.body.tid.should.equal(69);
                res.body.uid.should.equal(420);
                res.body.subtotal.should.equal(18.99);
                done();
            });
    });

    it('should be able to delete a transaction', function(done) {
        agent.delete('/api/transactions/' + tid)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                agent.get('/api/transactions/' + tid)
                    .expect(400)
                    .end(function(err, res) {
                        tid = undefined;
                        done();
                    });
            });
    });

    after(function(done) {
        if(tid) {
            Transaction.deleteOne({tid: tid}, function(err) {
                if (err) throw err;
            });
        }
        done();
    })
});