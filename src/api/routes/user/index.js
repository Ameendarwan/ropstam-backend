import { Router } from 'express';
import UserController from '../../../controllers/user';
const UserRouter = Router();

const path = '/user';

/**
 * @swagger
 *
 * /api/user/register:
 *   post:
 *    summary: Creating new user
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
 *                  firstName:
 *                    type: string
 *                    required: true
 *                  lastName:
 *                    type: string
 *                    required: true
 *                  email:
 *                    type: string
 *                    required: true
 *    responses:
 *      200:
 *        description: Success!
 *      500:
 *        description: Internel Server Error
 */
UserRouter.post(`${path}/register`, UserController.register);

/**
 * @swagger
 *
 * /api/user/login:
 *   post:
 *    summary: Use for user authentication
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
 *                  email:
 *                    type: string
 *                    required: true
 *                  password:
 *                    type: string
 *                    required: true
 *    responses:
 *      200:
 *        description: Success!
 *      500:
 *        description: Internel Server Error
 */
UserRouter.post(`${path}/login`, UserController.login);

export default UserRouter;
