import express from 'express';
import "reflect-metadata";

import "./database"
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(router);
app.get("/test",(req, res)=>{
  return res.send("Ola Teste");
})

app.listen(3333, ()=>{
  console.log("🚀 😜 🚀 Server is running")
})

