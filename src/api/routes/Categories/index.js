import { Router } from 'express';
import CategoryController from '../../../controllers/category';
const CategoryRouter = Router();

const path = '/category';

/**
 * @swagger
 *
 * /api/category/all:
 *   get:
 *    summary: To fetch all car categories
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

CategoryRouter.get(`${path}/all`, CategoryController.getAllCategories);

/**
 * @swagger
 *
 * /api/category/add:
 *   post:
 *    summary: To add new car category
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
 *    responses:
 *      200:
 *        description: Success!
 *      500:
 *        description: Internel Server Error
 */
CategoryRouter.post(`${path}/add`, CategoryController.addCategory);

/**
 * @swagger
 *
 * /api/category/update:
 *   put:
 *    summary: To update car category
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
 *                  id:
 *                    type: number
 *    responses:
 *      200:
 *        description: Success!
 *      500:
 *        description: Internel Server Error
 */
CategoryRouter.put(`${path}/update`, CategoryController.updateCategory);

/**
 * @swagger
 *
 * /api/category/delete:
 *   delete:
 *    summary: To delete car category
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
CategoryRouter.delete(`${path}/delete/:id`, CategoryController.deleteCategory);

export default CategoryRouter;
