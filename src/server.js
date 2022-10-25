import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from './config/swagger';
require('dotenv').config();
import cors from 'cors';
import { SERVER_PORT, ENVIRONMENTS } from './utils/CONSTANTS.js';

const app = express();
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(
  cors({
    origin: process.env.APP_URL,
    credentials: true,
  })
);

import { init } from './api/routes';
init(app); // initialize routes

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.listen(SERVER_PORT, () => {
  if (process.env.NODE_ENV === ENVIRONMENTS.LOCAL) {
    console.log(`Server running on port ${SERVER_PORT} DateTime:${new Date()}`);
  }
});
export default app;
