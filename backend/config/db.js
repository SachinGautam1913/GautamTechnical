const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    console.log('Server will continue running without database connection');
  }
};

module.exports = connectDB;