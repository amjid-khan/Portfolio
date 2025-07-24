import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();
app.use(express.json());

const cors = require('cors');

app.use(cors({
    origin: 'https://lovely-longma-0200d7.netlify.app'
}));

app.use("/api/portfolio", messageRouter);

connectDb();
app.listen(process.env.PORT, () => {
    console.log("Server is ready on port:", process.env.PORT);
});
