// 


// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// // Setup Nodemailer transport (example using Gmail)
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'your-email@gmail.com',
//     pass: 'your-email-password',
//   },
// });

// app.post('/api/contact', (req, res) => {
//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: email,
//     to: 'hemaalkolu808@gmail.com',
//     subject: `Message from ${name}`,
//     text: message,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send('Error: ' + error);
//     }
//     res.status(200).send('Message sent: ' + info.response);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });





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
      console.error("Error sending email:", error); // Log the error for debugging
      return res.status(500).send('Failed to send email. Please try again later.');
    }
    res.status(200).send('Message sent successfully!');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

