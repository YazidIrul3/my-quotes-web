const mongooose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongooose.connect(process.env.MONGOOSE_URL);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
