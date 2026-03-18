const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    let uri = process.env.MONGO_URI || process.env.MONGODB_URI;
    const localFallbackUri = "mongodb://127.0.0.1:27017/gt";

    if (!uri) {
      uri = localFallbackUri;
      console.warn(
        "MONGO_URI not set; falling back to local MongoDB at mongodb://127.0.0.1:27017/gt"
      );
    }

    if (uri.includes("username") || uri.includes("password")) {
      throw new Error(
        "MongoDB URI contains placeholder values. Please update MONGO_URI in your .env file with real credentials."
      );
    }

    const isAtlas = uri.includes("mongodb.net") || uri.includes("mongodb+srv");

    const clientOptions = {
      serverApi: { version: "1", strict: true, deprecationErrors: true },
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 2,
    };

    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);

    const isAtlas =
      (process.env.MONGO_URI || process.env.MONGODB_URI || "").includes(
        "mongodb.net"
      );

    if (isAtlas) {
      console.warn(
        "Atlas connection failed. If you are running locally, ensure your IP is whitelisted in Atlas or run a local MongoDB instance. Falling back to local MongoDB..."
      );
      try {
        await mongoose.connect("mongodb://127.0.0.1:27017/gt", {
          serverApi: { version: "1", strict: true, deprecationErrors: true },
          serverSelectionTimeoutMS: 5000,
          socketTimeoutMS: 45000,
          maxPoolSize: 10,
          minPoolSize: 2,
        });
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log(
          "Connected to local MongoDB at mongodb://127.0.0.1:27017/gt"
        );
        return;
      } catch (localError) {
        console.error(
          "Local MongoDB connection error:",
          localError.message || localError
        );
      }
    }

    console.error("Ensure MongoDB is running and MONGO_URI is configured correctly.");
    // Rethrow so the caller can decide how to handle a failed DB connection.
    throw error;
  }
};

module.exports = connectDB;
