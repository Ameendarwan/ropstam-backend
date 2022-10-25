import { check, validationResult } from 'express-validator';
import { HTTP_STATUS } from '../utils/CONSTANTS.js';
import { constructResponse, errorResponse } from '../utils/helpers.js';

export const nameValidation = (paramName = 'name') => [
  check(paramName)
    .isLength({ min: 3, max: 50 })
    .withMessage('Name should be in length between 3 to 50'),
];

export const firstNameValidation = (paramName = 'firstName') => [
  check(paramName)
    .isLength({ min: 3, max: 50 })
    .withMessage('First name should be in length between 3 to 50'),
];

export const lastNameValidation = (paramName = 'lastName') => [
  check(paramName)
    .isLength({ min: 3, max: 50 })
    .withMessage('Last name should be in length between 3 to 50'),
];

export const idValidation = (paramName = 'user_id') => [
  check(paramName).isNumeric().withMessage('ID should be numeric and not null/ undefined'),
];

export const emailValidation = (paramName = 'email') => [
  check(paramName).trim().isEmail().withMessage('Invalid email address'),
];

export const passwordValidation = (paramName = 'password') => [
  check(paramName)
    .isLength({ min: 6, max: 15 })
    .withMessage('Password length should be in between 6 to 15'),
];

export const validateApiRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  const response = errorResponse(HTTP_STATUS.BAD_REQUEST, 'Validation errors', errors);
  return constructResponse(res, response);
};
