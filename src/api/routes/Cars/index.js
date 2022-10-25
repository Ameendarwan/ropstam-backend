import { Router } from 'express';
import CarController from '../../../controllers/car';
import jwtAuth from '../../../middleware/auth';
const CarRouter = Router();

const path = '/car';

CarRouter.get(`${path}/all`, CarController.getAllCars);
CarRouter.post(`${path}/add`, jwtAuth.authMiddleware, CarController.addCar);
CarRouter.put(`${path}/update`, CarController.updateCar);
CarRouter.delete(`${path}/delete/:id`, CarController.deleteCar);

export default CarRouter;
