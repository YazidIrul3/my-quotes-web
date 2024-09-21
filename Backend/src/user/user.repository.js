const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const findUserSignUp = async (username, password) => {
  const user = await userModel.findOne({ username });

  const salt = await bcrypt.genSaltSync(10);
  const hashPassword = await bcrypt.hashSync(password, salt);

  const payload = {
    username,
    password: hashPassword,
  };

  const newUser = new userModel(payload);

  await newUser.save();

  return { user };
};

const findUserSignIn = async (username, password) => {
  const user = await userModel.findOne({ username });

  const checkedPassword = await bcrypt.compare(password, user.password);
  console.log(checkedPassword);

  const tokenData = {
    _id: user._id,
    username: user.username,
  };

  const tokenOption = {
    httpOnly: true,
    secure: true,
  };
  const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 4,
  });

  return { user, checkedPassword, token, tokenOption };
};

const findDetailUser = async (id) => {
  const user = await userModel.findById(id);

  return user;
};

module.exports = { findUserSignUp, findUserSignIn, findDetailUser };
