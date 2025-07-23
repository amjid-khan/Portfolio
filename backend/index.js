import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();

app.use(express.json());

// ✅ Use cors middleware properly with origin list
const allowedOrigins = [
    "http://localhost:5173",
    "https://glistening-toffee-8d15a8.netlify.app",
    "https://silly-selkie-ac96cf.netlify.app"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));

// ✅ Message API
app.use("/api/portfolio", messageRouter);

// ✅ Connect DB and start server
connectDb();
app.listen(process.env.PORT, () => {
    console.log("Server is ready on port:", process.env.PORT);
});
