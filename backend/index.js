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
        origin: process.env.FRONTEND_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());
app.use("/api/portfolio", messageRouter);

// Only connect DB once (recommended for serverless)
let isConnected = false;
const connectOnce = async () => {
    if (!isConnected) {
        await connectDb();
        isConnected = true;
    }
};

// Export handler that Vercel uses
export const handler = async (event, context) => {
    try {
        await connectOnce();
        return await serverless(app)(event, context);
    } catch (err) {
        console.error("❌ Handler error:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Server error" }),
        };
    }
};
