import { Categories } from '../models/index';
import { HTTP_STATUS, RESPOND_MESSAGES } from '../utils/CONSTANTS.js';
import { errorResponse, successResponse } from '../utils/helpers.js';

const getAll = async () => {
  try {
    let data = await Categories.findAll();
    return successResponse(data, HTTP_STATUS.OK, RESPOND_MESSAGES.CATEGORY_ALL);
  } catch (error) {
    return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
  }
};

const addCategory = async (name) => {
  try {
    let newCategory = await Categories.create({ name });
    const cat = await newCategory.save();
    return successResponse({ cat }, HTTP_STATUS.OK, RESPOND_MESSAGES.CATEGORY_ADDED);
  } catch (error) {
    return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
  }
};

const updateCategory = async (data) => {
  try {
    let response = await Categories.update(data, { where: { id: data.id } });
    return successResponse({ response }, HTTP_STATUS.OK, RESPOND_MESSAGES.CATEGORY_UPDATED);
  } catch (error) {
    return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
  }
};

const deleteCategory = async (id) => {
  try {
    let response = await await Categories.destroy({ where: { id } });
    return successResponse({ response }, HTTP_STATUS.OK, RESPOND_MESSAGES.CATEGORY_DELETED);
  } catch (error) {
    return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
  }
};

export default {
  getAll,
  addCategory,
  updateCategory,
  deleteCategory,
};
