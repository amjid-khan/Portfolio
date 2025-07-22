import Messages from "../models/messageModels.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const handleMessage = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Save message to DB
        const response = await Messages.create({ name, email, message });

        // Setup transporter using your .env values
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS.replace(/\s/g, ""), // remove spaces if any
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // sending to yourself
            subject: `New Contact Message from ${name}`,
            html: `
        <h2>You received a new message from your portfolio website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(201).send({ success: true, msg: "Message sent and email delivered", data: response });
    } catch (error) {
        console.error("Error in handleMessage:", error);
        res.status(500).send({ success: false, msg: "Something went wrong" });
    }
};

export default handleMessage;
