'use strict';

const utils = require('../utils/utils');
const { verifyJwt } = require('../utils/helpers');
const { APIError } = require('./api-error');

const authMiddleware = (req, _res, next) => {
  const token = req.header('Authorization');
  console.log(token);
  if (!token) throw new APIError('Access denied. No token provided.', utils.Status.UNAUTHORIZED);

  try {
    const bearer = 'Bearer ';
    if (!token.startsWith(bearer)) throw new Error();
    req.user = verifyJwt(token.replace(bearer, ''), process.env.JWT_SECRET);
    next();
  } catch (ex) {
    console.log(ex);
    throw new APIError('Invalid token.', utils.Status.BAD_REQUEST);
  }
};

export default { authMiddleware };
