// backend/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();

app.use(express.json());

const allowedOrigins = [
    "http://localhost:8000",
    "https://portfolio-frontend-psi-ten.vercel.app"
];

app.use(cors({
    origin: allowedOrigins,
    methods: ["POST", "GET"],
    credentials: true
}));


app.use("/api/portfolio", messageRouter);

//  Connect DB before handling requests
await connectDb();

//  Export express app for serverless
export default app;
