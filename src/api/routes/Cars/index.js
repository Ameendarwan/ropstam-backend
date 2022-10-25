import { Router } from 'express';
import CarController from '../../../controllers/car';
const CarRouter = Router();

const path = '/car';

CarRouter.get(`${path}/all`, CarController.getAllCars);
CarRouter.post(`${path}/add`, CarController.addCar);
CarRouter.put(`${path}/update`, CarController.updateCar);
CarRouter.delete(`${path}/delete/:id`, CarController.deleteCar);

export default CarRouter;
