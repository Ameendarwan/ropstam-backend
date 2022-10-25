import { Cars } from '../models/index';
import { HTTP_STATUS, RESPOND_MESSAGES } from '../utils/CONSTANTS.js';
import { errorResponse, successResponse } from '../utils/helpers.js';

const getAll = async () => {
  try {
    let data = await Cars.findAll();
    return successResponse(data, HTTP_STATUS.OK, RESPOND_MESSAGES.CAR_ALL);
  } catch (error) {
    return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
  }
};

const addCar = async (data) => {
  try {
    let newCar = await Cars.create(data);
    const car = await newCar.save();
    return successResponse({ car }, HTTP_STATUS.OK, RESPOND_MESSAGES.CAR_ADDED);
  } catch (error) {
    return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
  }
};

const updateCar = async (data) => {
  try {
    let response = await Cars.update(data, { where: { id: data.id } });
    return successResponse({ response }, HTTP_STATUS.OK, RESPOND_MESSAGES.CAR_UPDATED);
  } catch (error) {
    return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
  }
};

const deleteCar = async (id) => {
  try {
    let response = await await Cars.destroy({ where: { id } });
    return successResponse({ response }, HTTP_STATUS.OK, RESPOND_MESSAGES.CAR_DELETED);
  } catch (error) {
    return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
  }
};

export default {
  getAll,
  addCar,
  updateCar,
  deleteCar,
};
