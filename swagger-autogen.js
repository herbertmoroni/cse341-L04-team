const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Temples API',
      description: 'API for managing temple information'
    },
    host: 'localhost:8080',
    schemes: ['http'],
  };

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js','./routes/swagger.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);