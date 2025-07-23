import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();
app.use(express.json());

// ✅ Add all frontend URLs here
const allowedOrigins = [
    "https://glistening-toffee-8d15a8.netlify.app",
    "http://localhost:5173"
];

// ✅ Use cors package properly
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("CORS not allowed from this origin"));
        }
    },
    credentials: true
}));

// ✅ Routes
app.use("/api/portfolio", messageRouter);

// ✅ DB + server
connectDb();
app.listen(process.env.PORT, () => {
    console.log("Server is ready on port:", process.env.PORT);
});
