const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();  // To read .env variables

const app = express();
const port = 5000;

// app.use(cors());
const allowedOrigins = [
  "https://portfolio-client-e518.onrender.com",
  "http://localhost:3000"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json()); // To parse JSON request bodies

// Create a transporter to connect to Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, 
    pass: process.env.GMAIL_PASS,   
  },
});

// API endpoint to handle the contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Set up the email options
  const mailOptions = {
    from: email,  // Sender's email (from the form)
    to: process.env.GMAIL_USER,  // Recipient's email (your Gmail)
    subject: `Message from ${name}`,
    text: message,  // Email body (message from the form)
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Failed to send email. Please try again later.');
    }
    res.status(200).send('Message sent successfully!');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
