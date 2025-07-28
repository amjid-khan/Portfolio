import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();
connectDb();

const app = express();

// ✅ Use correct allowed origin
const allowedOrigins = [
    "https://portfolio-frontend-psi-ten.vercel.app",
    "http://localhost:3000"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true
}));

// ✅ Handle preflight requests for all routes
app.options("*", cors());

app.use(express.json());
app.use("/api/portfolio", messageRouter);

// ✅ No app.listen on Vercel
export default app;
