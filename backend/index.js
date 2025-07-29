import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";
import serverless from "serverless-http";

dotenv.config();

const app = express();

const allowedOrigins = [
    "http://localhost:3000",
    "https://portfolio-frontend-jet-tau.vercel.app"
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());

app.use("/api/portfolio", messageRouter);

connectDb();

export const handler = serverless(app);
