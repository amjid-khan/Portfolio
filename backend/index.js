// backend/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";
import serverless from "serverless-http";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDb();
app.use("/api/portfolio", messageRouter);

//For Vercel (ESM format)
export const handler = serverless(app);
