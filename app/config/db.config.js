require('dotenv').config();
const mongoose = require('mongoose');
const db_connectURL = process.env.DB_CONNECT_URL;

// Function to connect to the database
const dbconnect = async () => {
  try {
    await mongoose.connect(db_connectURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database!");
  } catch (err) {
    console.log("Cannot connect to the database!", err);
    process.exit();
  }
};

// Export the function
module.exports = dbconnect;
