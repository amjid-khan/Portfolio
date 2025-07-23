import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();

app.use(express.json());

// ✅ ADD all frontend origins here (including current Netlify site)
const allowedOrigins = [
    'https://glistening-toffee-8d15a8.netlify.app',
    'https://silly-selkie-ac96cf.netlify.app',
    'http://localhost:5173'
];

// ✅ CORS middleware setup
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // ✅ handle OPTIONS preflight
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});

// ✅ Routes
app.use("/api/portfolio", messageRouter);

// ✅ DB connection and server listen
connectDb();

app.listen(process.env.PORT, () => {
    console.log("Server is ready on port:", process.env.PORT);
});
