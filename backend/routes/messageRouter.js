import express from "express"
import handleMessage from "../controllers/messageControllers.js"

const messageRouter = express.Router()

messageRouter.post("/message", handleMessage)

export default messageRouter