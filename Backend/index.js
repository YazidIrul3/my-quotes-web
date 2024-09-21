const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
const routerUser = require("./src/user/user.controller");
const routerQuotes = require("./src/quotes/quotes.controller");
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONT_END_URL,
    credentials: true,
  })
);

app.use("/api", routerUser);
app.use("/api", routerQuotes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log("Connected to MongoDB");
  });
});
