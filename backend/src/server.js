import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";


dotenv.config();


const app = express();



app.use(cors());

app.use(express.json());



// Database Connection

connectDB();



// Test Route

app.get("/",(req,res)=>{

    res.json({
        message:"TaskFlow Backend Running"
    });

});





const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{

    console.log(
        `Server running on port ${PORT}`
    );

});

import authRoutes from "./routes/auth.routes.js";


app.use(
    "/api/auth",
    authRoutes
);

import taskRoutes from "./routes/task.routes.js";


app.use(
    "/api/tasks",
    taskRoutes
);