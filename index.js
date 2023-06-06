import express from "express";
import morgan from "morgan";
import router from './routes/UserRoutes.js';
import mongoose from "mongoose";


const app = express();


app.use(express.json());   

app.use(morgan('dev'));

 app.use('/api/v1',router);

 mongoose.connect('mongodb+srv://annusingh:anusingh58@cluster0.md93vry.mongodb.net/ecommerce')

 .then(()=> console.log("db connected"))
 .catch((err)=> console.log("db error=>",err));



 app.listen(3500,()=> console.log("working on port 3500")) 
