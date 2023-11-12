const express = require("express");

const Pizza = require("../models/pizzaModel");

const app = express();
const db = require("./db.js");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server" + port);
});

app.get("/getpizzas", (req, res) => {
  Pizza.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});

const port = process.env.port || 8000;

app.listen(port, () => `server running on port port`);
