/* This is the file for the item data router */

var item = require('../controllers/item.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .get(item.list)
    .post(item.create);

router.route('/:itemID')
    .get(item.read)
    .put(item.update)
    .delete(item.delete);

router.param('itemID', item.itemByID);

module.exports = router;