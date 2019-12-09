/* Reference file for code used to salt passwords */

var crypto = require('crypto');

/*** Password Salting Functions (Tutorial: https://ciphertrick.com/salt-hash-passwords-using-nodejs-crypto/) ***/

/* Create a salt that is length-bytes long*/
function saltShaker(length) {
    return crypto.randomBytes(length).toString('hex');
};

/* Create a SHA512 hash of password for a given salt */
function hashPass(password, salt) {
    var hmac = crypto.createHmac('sha512', salt);
    hmac.update(password);
    return hmac.digest('hex');
};