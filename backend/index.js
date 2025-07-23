import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import messageRouter from "./routes/messageRouter.js"
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

// apis endpoints
app.use("/api/portfolio", messageRouter)

app.get("/", (req, res) => {
    res.send("Wellcome to backend")
})
app.get("/home", (req, res) => {
    res.send("hyy")
})
//db connection and server listening
connectDb()
app.listen(process.env.PORT, () => {
    console.log("Server is ready on port : ", process.env.PORT)
})