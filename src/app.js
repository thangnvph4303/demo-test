import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/products';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use("/api", productRouter);
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/thangnvph20126-test');


export const viteNodeApp = app;