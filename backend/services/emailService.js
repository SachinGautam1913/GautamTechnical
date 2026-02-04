const nodemailer = require('nodemailer');

const sendEmailNotification = async (messageData) => {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const emailContent = `
New Message Received

Source: ${messageData.source}

Name: ${messageData.name}
Email: ${messageData.email}
Phone: ${messageData.phone || 'Not provided'}
${messageData.subject ? `Subject: ${messageData.subject}` : ''}

Message:
${messageData.message}

Received at: ${new Date().toLocaleString()}
    `;

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New ${messageData.source} inquiry from ${messageData.name}`,
      text: emailContent,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email notification sent successfully');
  } catch (error) {
    console.error('Email sending failed:', error);
    // Don't throw error - we still want to save the message even if email fails
  }
};

module.exports = { sendEmailNotification };