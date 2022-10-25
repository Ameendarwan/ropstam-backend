// Created by sumair on 11/11/2020.
'use strict'

const utils = require('../utils/utils')
const { APIError } = require('./api-error');

module.exports = function (_req, _res, _next) {
   throw new APIError('URL Not Found', utils.Status.NOT_FOUND)
}
