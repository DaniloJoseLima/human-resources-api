import 'express-async-errors'
import { AppDataSource } from './data-source'

import { errorMiddleware } from './middlewares/error'
import userRoutes from './user/routers';

const cors = require("cors");
const express = require("express");
const app = express();

AppDataSource.initialize().then(() => {

  const corsOptions = {
    origin: '*', // Arrumar URL padrão cors
    optionsSuccessStatus: 200
  }

  app.use(cors(corsOptions));
  app.use(express.json());
	app.use(errorMiddleware)
  
  app.use(userRoutes)
  
  app.listen(process.env.PORT, () => console.log("Server is running"));

})