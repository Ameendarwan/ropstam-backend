import UserRouter from './User';
import CategoryRouter from './Categories';
import CarRouter from './Cars';
import { BASE_URL } from '../../utils/CONSTANTS.js';

const routes = [UserRouter, CategoryRouter, CarRouter];

export const init = (app) => {
  routes.forEach((route) => app.use(`${BASE_URL}`, route));
};
