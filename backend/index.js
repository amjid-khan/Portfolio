import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();
app.use(express.json());

// ✅ Define all allowed frontend URLs here
const allowedOrigins = [
    'https://glistening-toffee-8d15a8.netlify.app',
    'https://silly-selkie-ac96cf.netlify.app',
    'http://localhost:5173'
];

// ✅ Use official cors() middleware
app.use(cors({
    origin: function (origin, callback) {
        // Allow no-origin requests (like Postman, curl)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error('CORS not allowed for this origin: ' + origin));
        }
    },
    credentials: true
}));

// ✅ Optional: Handle OPTIONS preflight for all routes
app.options("*", cors());

// ✅ Routes
app.use("/api/portfolio", messageRouter);

// ✅ DB connection and server start
connectDb();

app.listen(process.env.PORT, () => {
    console.log("✅ Server is ready on port:", process.env.PORT);
});
