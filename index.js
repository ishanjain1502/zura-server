const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const db = require('./cofig/db')
const apiRoutes = require("./routes/v1/api");

app.use(
    cors({
      origin: "*",
    })
  );
dotenv.config();

db();
app.use("/api/v1", apiRoutes);

app.get("/", (req, res) => {
    res
      .status(200)
      .send(
        "Welcome to zura API "
      );
  });

  const PORT = process.env.PORT || 1337
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
  
  module.exports = app;