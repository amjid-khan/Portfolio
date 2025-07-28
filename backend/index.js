// dev.js (for testing locally)
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
<<<<<<< HEAD
app.use(cors());
=======
app.use(cors(
    {
        orgin : "https://deploye-mern-stack-app",
        method : ["POST" , "GET"],
        credentials : true
    }
))
>>>>>>> d3f25ae9d4e6839dac07c099f6df19c738649d0a

app.use("/api/portfolio", messageRouter);

connectDb();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running locally on port", PORT);
});
