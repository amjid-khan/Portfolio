import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())

app.use("/api/portfolio", messageRouter);

// Connect DB & Start Server
connectDb();

app.listen(process.env.PORT, () => {
    console.log("Server is running on port:", process.env.PORT);
});
