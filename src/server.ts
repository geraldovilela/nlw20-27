import express from 'express';

const app = express();
app.use(express.json());

app.get("/test",(req, res)=>{
  return res.send("Ola Teste");
})

app.listen(3333, ()=>{
  console.log("🚀 😜 🚀 Server is running")
})

