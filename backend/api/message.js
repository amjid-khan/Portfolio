import connectDb from "../config/db.js";
import handleMessage from "../controllers/messageController.js";

export default async function handler(req, res) {
    if (req.method === "POST") {
        await connectDb();
        return handleMessage(req, res);
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
