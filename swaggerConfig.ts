import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Danilo Lima - Human Resources',
      version: '1.0.0',
      description: 'API documentation Human Resources',
    },
    servers: [
      {
        url: 'http://localhost:3001/v1/api', 
        description: 'Local development server',
      },
    ],
  },
  apis: [
    './src/refData/routers/*.ts', 
    './src/collaborator/routers/*.ts',
    './src/user/routers/*.ts',
    './src/auth/routers/*.ts'
  ],
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
