require('dotenv').config();
export const BASE_URL = '/api';
export const SERVER_PORT = process.env.PORT || 80;
export const PAGE_SIZE = 20;

export const HTTP_STATUS = {
  OK: 200,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDED: 409,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
};

export const ENVIRONMENTS = {
  LOCAL: 'local',
};

export const EMAIL_SUBJECTS = {
  WELCOME: 'Ropstam, Welcome Ameen!',
};

export const RESPOND_MESSAGES = {
  VALIDATION_ERRORS: 'Validation errors',
  USER_ALREADY_EXISTS: 'User already exist',
  USER_REGISTERED: 'User registered successfully!',
  USER_NOT_FOUND: 'User not found',
  INCORRECT_PASSWORD: 'Incorrect Password!',
  USER_AUTHUTHENTICATED: 'User authenticated successfully',
  CATEGORY_ALL: 'All Categories has been fetched successfully!',
  CATEGORY_ADDED: 'Category has been added successfully!',
  CATEGORY_UPDATED: 'Category has been updated successfully!',
  CATEGORY_DELETED: 'Category has been deleted successfully!',
  CAR_ALL: 'All Car has been fetched successfully!',
  CAR_ADDED: 'Car has been added successfully!',
  CAR_UPDATED: 'Car has been updated successfully!',
  CAR_DELETED: 'Car has been deleted successfully!',
};
