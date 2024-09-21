const express = require("express");
const { userSignUp, userSignIn, userDetail } = require("./user.service");
const routerUser = express.Router();

routerUser.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userSignUp(username, password);

    res.status(200).json({
      data: user,
      success: true,
      error: false,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
});

routerUser.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const [token, tokenOption] = await userSignIn(username, password);

    // console.log(token);

    res.cookie("token", token, tokenOption).status(200).json({
      message: "User logged in successfully",
      data: token,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
});

routerUser.get("/logout", (req, res) => {
  try {
    res.clearCookie("token");

    res.status(200).json({
      data: {},
      message: "Logout Successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error || error.message,
      success: false,
      error: true,
    });
  }
});

routerUser.get("/user-detail", async (req, res) => {
  try {
    const user = await userDetail(req.userId);
    // console.log("userId", req.userId);

    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "User details",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
});

module.exports = routerUser;
