/* This is the file for the vendor data router */

var vendor = require('../controllers/vendor.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .get(vendor.list)
    .post(vendor.create);

router.route('/:vendorVID')
    .get(vendor.read)
    .put(vendor.update)
    .delete(vendor.delete);

router.param('vendorVID', vendor.vendorByVID);

module.exports = router;