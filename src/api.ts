import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swaggerConfig'; // ajuste o caminho conforme necessário

import 'express-async-errors'
import { AppDataSource } from './data-source'

import { errorMiddleware } from './shared/middlewares/error'

import authRoutes from './auth/routers';
import userRoutes from './user/routers';
import refDataRoutes from './refData/routers';
import collaboratorRoutes from './collaborator/routers';

const cors = require("cors");
const express = require("express");
const app = express();

AppDataSource.initialize().then(() => {

  const baseAPI = '/v1/api'

  const corsOptions = {
    origin: '*', // Arrumar URL padrão cors
    optionsSuccessStatus: 200
  }

  app.use(cors(corsOptions));
  app.use(express.json());
	app.use(errorMiddleware)

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use(`${baseAPI}/ref-data`, refDataRoutes)
  app.use(`${baseAPI}/auth`, authRoutes)
  app.use(`${baseAPI}/user`, userRoutes)

  app.use(`${baseAPI}/collaborator`, collaboratorRoutes)
  
  app.listen(process.env.PORT, () => console.log("Server is running"));

})