const Message = require('../models/Message');
const { sendEmailNotification } = require('../services/emailService');

const createMessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message, source } = req.body;
    console.log(req.body);
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
      source: source.trim()
    };

    // Try to save to database
    let savedMessage = null;
    try {
      const newMessage = new Message(messageData);
      savedMessage = await newMessage.save();
    } catch (dbError) {
      console.error('Database save error:', dbError.message);
      // Continue without database save for development
    }

    // Send email notification (don't wait for it)
    sendEmailNotification(messageData);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: savedMessage ? {
        id: savedMessage._id,
        createdAt: savedMessage.createdAt
      } : null
    });
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
};

module.exports = { createMessage };