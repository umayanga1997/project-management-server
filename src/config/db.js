const mongoose = require("mongoose");
const mogoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb Connected`);
  } catch (error) {
    console.log(err);
  }
};

module.exports = connectDB;
