import { Router } from 'express';
import CarController from '../../../controllers/car';
import jwtAuth from '../../../middleware/auth';
const CarRouter = Router();

const path = '/car';

/**
 * @swagger
 *
 * /api/car/all:
 *   get:
 *    summary: To fetch all cars
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    responses:
 *      200:
 *        description: Success!
 *      500:
 *        description: Internel Server Error
 */
CarRouter.get(`${path}/all`, CarController.getAllCars);

/**
 * @swagger
 *
 * /api/car/add:
 *   post:
 *    summary: To add new car
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    requestBody:
 *        content:
 *           application/x-www-form-urlencoded:
 *              schema:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  company:
 *                    type: string
 *                  category:
 *                    type: string
 *                  registrationNo:
 *                    type: string
 *                  model:
 *                    type: string
 *                  color:
 *                    type: string
 *    responses:
 *      200:
 *        description: Success!
 *      500:
 *        description: Internel Server Error
 */
CarRouter.post(`${path}/add`, jwtAuth.authMiddleware, CarController.addCar);

/**
 * @swagger
 *
 * /api/car/update:
 *   put:
 *    summary: To update car details
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    requestBody:
 *        content:
 *           application/x-www-form-urlencoded:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *                  company:
 *                    type: string
 *                  category:
 *                    type: string
 *                  registrationNo:
 *                    type: string
 *                  model:
 *                    type: string
 *                  color:
 *                    type: string
 *    responses:
 *      200:
 *        description: Success!
 *      500:
 *        description: Internel Server Error
 */
CarRouter.put(`${path}/update`, CarController.updateCar);

/**
 * @swagger
 *
 * /api/car/delete:
 *   delete:
 *    summary: To delete car
 *    parameters:
 *     - in: path
 *       name: id
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    responses:
 *      200:
 *        description: Success!
 *      500:
 *        description: Internel Server Error
 */
CarRouter.delete(`${path}/delete/:id`, CarController.deleteCar);

export default CarRouter;
