import express from 'express';
import "reflect-metadata";

import "./database"

const app = express();
app.use(express.json());

app.get("/test",(req, res)=>{
  return res.send("Ola Teste");
})

app.listen(3333, ()=>{
  console.log("🚀 😜 🚀 Server is running")
})

