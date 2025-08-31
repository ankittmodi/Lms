import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';

// initialize express
const app=express();
// connect to database
await connectDB();
// middleware
app.use(cors()); //cors is used to connect any domain

// routes
app.get("/",(req,res)=>{
  res.send('hello world bro');
});

app.post('/clerk',express.json(),clerkWebhooks)

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`);
})
