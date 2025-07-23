import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();

app.use(express.json());

// ✅ CORS for both local and deployed frontend
const allowedOrigins = [
    'https://silly-selkie-ac96cf.netlify.app',
    'http://localhost:5173'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

// API endpoints
app.use("/api/portfolio", messageRouter);

// DB connection and server listening
connectDb();

app.listen(process.env.PORT, () => {
    console.log("Server is ready on port:", process.env.PORT);
});
