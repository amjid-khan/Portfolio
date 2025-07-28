import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";

import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: "https://your-frontend.vercel.app",  // ✅ update as needed
    methods: ["GET", "POST"],
    credentials: true
}));

app.use("/api/portfolio", messageRouter);

connectDb();

export default serverless(app); // ✅ Serverless export for Vercel
