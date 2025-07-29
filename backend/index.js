import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";
import serverless from "serverless-http";

dotenv.config();

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000, https://your-frontend.vercel.app",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());

app.use("/api/portfolio", messageRouter);

connectDb();

export const handler = serverless(app);
