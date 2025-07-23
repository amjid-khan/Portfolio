import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();

app.use(express.json());

// ✅ Correct CORS setup
app.use(cors({
    origin: 'https://silly-selkie-ac96cf.netlify.app',
    credentials: true,
}));

// API endpoints
app.use("/api/portfolio", messageRouter);

// DB connection and server listening
connectDb();

app.listen(process.env.PORT, () => {
    console.log("Server is ready on port:", process.env.PORT);
});
