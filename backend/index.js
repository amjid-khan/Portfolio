import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors(
    {
        orgin : "https://deploye-mern-stack-app",
        method : ["POST" , "GET"],
        credentials : true
    }
))

app.use("/api/portfolio", messageRouter);

// Connect DB & Start Server
connectDb();

app.listen(process.env.PORT, () => {
    console.log("Server is running on port:", process.env.PORT);
});
