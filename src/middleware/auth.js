'use strict';

const utils = require('../utils/utils');
const { APIError } = require('./api-error');
const { Secret } = require('../config');
module.exports = function (req, _res, next) {
  const token = req.header('Authorization');
  // console.log(token)
  if (!token) throw new APIError('Access denied. No token provided.', utils.Status.UNAUTHORIZED);

  try {
    const bearer = 'Bearer ';
    if (!token.startsWith(bearer)) throw new Error();
    // req.user = jwt.verify(token.replace(bearer, ''), Secret)
    next();
  } catch (ex) {
    console.log(ex);
    throw new APIError('Invalid token.', utils.Status.BAD_REQUEST);
  }
};
