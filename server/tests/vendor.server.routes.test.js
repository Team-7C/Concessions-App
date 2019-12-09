var should = require('should'),
    request = require('supertest'),
    express = require('../config/express'),
    Vendor = require('../models/vendorSchema.js');

/* Global variables */
var app, agent, vid;

/* Unit tests for testing server side routes for the vendor API */
describe('Vendor CRUD Tests', function() {

    this.timeout(10000);

    before(function(done) {
        app = express.init();
        agent = request.agent(app);

        done();
    });

    it('should be able to retrieve all vendors', function(done) {
        agent.get('/api/vendors/')
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                done();
            });
    });

    it('should be able to retrieve a single vendor', function(done) {
        Vendor.findOne({name: "Domino's Pizza"}, function(err, vendor) {
            if (err) console.log(err);
            else {
                agent.get('/api/vendors/' + vendor.vid)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err);
                        should.exist(res);
                        res.body.name.should.equal('Domino\'s Pizza');
                        res.body.email.should.equal('contactus@dominos.com');
                        res.body.phone.should.equal('111-111-1111');
                        done();
                    });
            }
        })
    });

    it('should be able to save a vendor', function(done) {
        var vendor = {
            vid: 410,
            credentials: {
                username: "5guys",
                password: "baf",
                salt: "w/e"
            },
            name: "Five Guys",
            email: "five@guys.com",
            phone: "123-456-7890"
        };
        agent.post('/api/vendors')
            .send(vendor)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res.body._id);
                res.body.name.should.equal('Five Guys');
                res.body.email.should.equal('five@guys.com');
                res.body.phone.should.equal('123-456-7890');
                vid = res.body.vid;
                done();
            })
    });

    it('should be able to update a vendor', function(done) {
        var updatedVendor = {
            vid: 410,
            credentials: {
                username: "5guys",
                password: "baf",
                salt: "w/e"
            },
            name: "Five Guys",
            email: "fiveguys@gmail.com",
            phone: "123-456-7890"
        };
        agent.put('/api/vendors/' + vid)
            .send(updatedVendor)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res.body._id);
                res.body.name.should.equal('Five Guys');
                res.body.email.should.equal('fiveguys@gmail.com');
                res.body.phone.should.equal('123-456-7890');
                done();
            });
    });

    it('should be able to delete a vendor', function(done) {
        agent.delete('/api/vendors/' + vid)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                agent.get('/api/vendors/' + vid)
                    .expect(400)
                    .end(function(err, res) {
                        vid = undefined;
                        done();
                    });
            });
    });

    after(function(done) {
        if(vid) {
            Vendor.deleteOne({vid: vid}, function(err) {
                if (err) throw err;
            });
        }
        done();
    })
});