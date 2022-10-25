import CarServices from '../../services/car';
import { constructResponse } from '../../utils/helpers.js';

const getAllCars = async (req, res) => {
  const response = await CarServices.getAll();
  return constructResponse(res, response);
};

const addCar = async (req, res) => {
  const response = await CarServices.addCar(req.body);
  return constructResponse(res, response);
};
const updateCar = async (req, res) => {
  const response = await CarServices.updateCar(req.body);
  return constructResponse(res, response);
};

const deleteCar = async (req, res) => {
  const { id } = req.params;
  const response = await CarServices.deleteCar(id);
  return constructResponse(res, response);
};

export default {
  getAllCars,
  addCar,
  updateCar,
  deleteCar,
};
