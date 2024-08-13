const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

const objData = {
  Name: "Dinesh",
  Surname: "Jadhav",
  Mobile_NO: "77774957853",
};

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter");
});

app.get("/login", (req, res) => {
  res.send(`<h1>Please log In`);
});

app.get("/data", (req, res) => {
  res.json(objData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
