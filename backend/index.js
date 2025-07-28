import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();



app.use(cors());

app.use(express.json());


app.use("/api/portfolio", messageRouter);

connectDb();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
