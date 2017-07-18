const crypto = require('crypto');
const mkey = require('./helpers/mkey');
console.log(mkey() + '===========');
const key = crypto.pbkdf2Sync('password', 'mkey()', 1000, 51, 'sha512');
console.log(key.toString('hex'));  // '3745e48...aa39b34'
