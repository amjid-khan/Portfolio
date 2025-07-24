import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "../config/db.js";
import messageRouter from "../routes/messageRouter.js";
import serverless from "serverless-http";

dotenv.config();

const app = express();

app.use(express.json());
const allowedOrigins = [
    "https://your-netlify-app.netlify.app", // ✅ Your actual Netlify URL
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
    })
);

app.use("/api/portfolio", messageRouter);

// Connect DB (only once, Vercel might call multiple times)
let dbConnected = false;
if (!dbConnected) {
    connectDb();
    dbConnected = true;
}

// ❌ Remove app.listen()
// ✅ Export serverless handler
export const handler = serverless(app);
