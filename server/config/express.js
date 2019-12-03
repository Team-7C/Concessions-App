const path = require('path'),
    express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    customerRouter = require('../routes/customer.server.routes');
    itemsRouter = require('../routes/item.server.routes');
    vendorsRouter = require('../routes/vendor.server.routes');
    transactionsRouter = require('../routes/transaction.server.routes');

module.exports.init = () => {

    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true
    });
    mongoose.set('useUnifiedTopology', true);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();

    // Enable CORS for client to use server API
    app.use(cors());

    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        // res.setHeader('Access-Control-Allow-Headers',' Origin, X-Requested-With, Content-Type, Accept');
        next();
    });

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json());

    // Customer API router
    app.use('/api/customers', customerRouter);

    // Item API router
    app.use('/api/items', itemsRouter);

    // Vendor API router
    app.use('/api/vendors', vendorsRouter);

    // Transaction API router
    app.use('/api/transactions', transactionsRouter);

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
};

