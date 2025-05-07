
// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// require('dotenv').config();  // To read .env variables

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json()); // To parse JSON request bodies

// // Create a transporter to connect to Gmail
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.GMAIL_USER,   // Your Gmail email (from .env file)
//     pass: process.env.GMAIL_PASS,   // Your Gmail password (from .env file)
//   },
// });

// // API endpoint to handle the contact form submission
// app.post('/api/contact', (req, res) => {
//   const { name, email, message } = req.body;

//   // Set up the email options
//   const mailOptions = {
//     from: email,  // Sender's email (from the form)
//     to: process.env.GMAIL_USER,  // Recipient's email (your Gmail)
//     subject: `Message from ${name}`,
//     text: message,  // Email body (message from the form)
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error sending email:", error); // Log the error for debugging
//       return res.status(500).send('Failed to send email. Please try again later.');
//     }
//     res.status(200).send('Message sent successfully!');
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });




// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors({
//   origin: "https://portfolio-client-e518.onrender.com",
//   methods: "POST",
//   credentials: true,
// }));
// app.use(express.json());

// // Verify that .env variables are being read
// console.log("GMAIL_USER:", process.env.GMAIL_USER);
// console.log("GMAIL_PASS:", process.env.GMAIL_PASS);
// console.log("CLIENT_URL:", process.env.CLIENT_URL);

// // Create a transporter to connect to Gmail
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_PASS,
//   },
//   tls: {
//     rejectUnauthorized: false, // Only for testing, not recommended for production
//   },
// });

// // API endpoint to handle the contact form submission
// app.post('/api/contact', (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).send('All fields are required.');
//   }

//   const mailOptions = {
//     from: email,
//     to: process.env.GMAIL_USER,
//     subject: `Message from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error sending email:", error);
//       return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
//     }
//     console.log('Email sent:', info.response);
//     res.status(200).json({ message: 'Message sent successfully!' });
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// index.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();  // To read .env variables

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Create a transporter to connect to Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,   // Your Gmail email (from .env file)
    pass: process.env.GMAIL_PASS,   // Your Gmail password (from .env file)
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
