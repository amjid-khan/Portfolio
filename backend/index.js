import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();

app.use(express.json());

const allowedOrigins = [
    'https://silly-selkie-ac96cf.netlify.app',
    'http://localhost:5173'
];

// CORS headers setup manually
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // ✅ THIS handles preflight requests
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);  // 👈 prevent 404 on preflight
    }

    next();
});

// API endpoints
app.use("/api/portfolio", messageRouter);

// DB connection and server listening
connectDb();

app.listen(process.env.PORT, () => {
    console.log("Server is ready on port:", process.env.PORT);
});
