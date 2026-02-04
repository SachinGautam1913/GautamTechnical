const createMessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message, source } = req.body;

    // Validate required fields
    if (!name || !email || !message || !source) {
      return res.status(400).json({
        error: 'Missing required fields: name, email, message, source'
      });
    }

    // Simple response without database or email
    res.status(201).json({
      success: true,
      message: 'Message received successfully',
      data: {
        name,
        email,
        source
      }
    });
  } catch (error) {
    console.error('Error processing message:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
};

module.exports = { createMessage };