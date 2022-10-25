import CategoriesServices from '../../services/category';
import { constructResponse } from '../../utils/helpers.js';

const getAllCategories = async (req, res) => {
  const response = await CategoriesServices.getAll();
  return constructResponse(res, response);
};

const addCategory = async (req, res) => {
  const { name } = req.body;
  const resp = await CategoriesServices.addCategory(name);
  return constructResponse(res, resp);
};
const updateCategory = async (req, res) => {
  const response = await CategoriesServices.updateCategory(req.body);
  return constructResponse(res, response);
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const response = await CategoriesServices.deleteCategory(id);
  return constructResponse(res, response);
};

export default {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
};
