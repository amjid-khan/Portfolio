import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) return;

  try {
    const response = await axios.post(
       "https://portfolio-olp6uiqff-amjid-khans-projects.vercel.app/api/portfolio",
      formData
    );

    if (response.data.success) {
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } else {
      alert("Failed to send message. Please try again later.");
    }
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Something went wrong. Check console for more details.");
  }
};


  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-subtitle">
          Feel free to reach out. I’ll get back as soon as possible!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {sent && <p className="sent-message">Message sent successfully!</p>}
      </div>
    </section>
  );
};

export default Contact;
