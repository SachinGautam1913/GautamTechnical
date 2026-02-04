const Message = require('../models/Message');
const { sendEmailNotification } = require('../services/emailService');

const createMessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message, source, ...otherFields } = req.body;

    // Validate required fields
    if (!name || !email || !message || !source) {
      return res.status(400).json({
        error: 'Missing required fields: name, email, message, source'
      });
    }

    // Create message data
    const messageData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : undefined,
      subject: subject ? subject.trim() : undefined,
      message: message.trim(),
      source: source.trim(),
      ...otherFields // Include any additional fields like company, service, etc.
    };

    // Save to database
    const newMessage = new Message(messageData);
    await newMessage.save();

    // Send email notification (don't wait for it)
    sendEmailNotification(messageData);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: {
        id: newMessage._id,
        createdAt: newMessage.createdAt
      }
    });
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
};

module.exports = { createMessage };