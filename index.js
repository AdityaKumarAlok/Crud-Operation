const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path"); //This is important for Require Path.
const HomeRouter = require("./Routes/routes"); // Requiring Routes.js

// DATABASE CONNECTION CODE -------STARTED
const url = `mongodb+srv://alok:alok@cluster0.fplw1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

// DATABASE CONNECTION CODE -------ENDED

app.use(express.json());

app.use("/", HomeRouter);

app.listen(3000);
