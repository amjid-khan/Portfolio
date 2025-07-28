import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "../config/db.js";
import messageRouter from "../routes/messageRouter.js";
import serverless from "serverless-http";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/portfolio", messageRouter);

// Connect DB
connectDb();

export const handler = serverless(app);
