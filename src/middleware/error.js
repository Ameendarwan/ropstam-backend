'use strict';
const utils = require('../utils/utils');

module.exports = function (err, _req, res, _next) {
  // winston.error(err.message, err)
  let message = 'Something failed.';
  if (err) {
    if (err.name === 'ValidationError') {
      return utils.sendJSONResponse(
        res,
        utils.Status.BAD_REQUEST,
        err.errors[Object.keys(err.errors)[0]].message,
        err
      );
    }
    if (err.name === 'APIError') {
      return utils.sendJSONResponse(res, err.status, err.message, err);
    }
    if (err.name === 'InternalOAuthError')
      return utils.sendJSONResponse(res, 400, err.message, err);
  }

  return utils.sendJSONResponse(res, utils.Status.INTERNAL_SERVER_ERROR, message, err);
};
