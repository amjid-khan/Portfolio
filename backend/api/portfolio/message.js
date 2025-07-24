import connectDb from "../../config/db.js";
import handleMessage from "../../controllers/messageController.js";

export default async function handler(req, res) {
  // ✅ Add CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // or your frontend URL
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    await connectDb();
    return handleMessage(req, res);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
