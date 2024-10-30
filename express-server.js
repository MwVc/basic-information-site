const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.resolve(__dirname, "contact-me.html"));
});

app.all("*", (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, "404.html"));
});

app.listen(5000, () => {
  console.log("Listening at port 5000");
});
