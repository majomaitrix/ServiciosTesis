const { response } = require("express");
const express = require("express");
const routerApi=require('./routes');
const cors = require('cors');
//Swagger
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");
const swaggerDoc=require('swagger-jsdoc');
const path=require('path');

const {logErrors,errorHandler,boomErrorHandler} = require('./middlewares/errorHandler');

const { join } = require("path");

const app=express();
const port=process.env.PORT || 3000;

app.use(express.json());

const whitelist=['http://localhost:3000',]
const options={
  origin:(origin ,callback)=>{
    if(whitelist.includes(origin)|| !origin){
      callback(null,true);
    }else{
      callback(new Error('No Permitido'));
    }
  }
}
app.use(cors(options));
routerApi(app);
app.use(boomErrorHandler);
app.use("/",swaggerUi.serve,swaggerUi.setup(swaggerDocument));
app.listen(port, ()=>{
  console.log('My Port '+ port);
});
