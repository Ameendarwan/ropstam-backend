const { resolve } = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: resolve(__dirname, '../../.env') });

//we are in local environment
module.exports = require('./local.js');
