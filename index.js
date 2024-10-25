const http = require("http");
const fs = require("fs");
const path = require("path");
const { error, log } = require("console");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), "utf8", (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else {
        log(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server error");
      }
    });
  } else if (req.url === "/background.jpg") {
    fs.readFile(path.join(__dirname, "background.jpg"), (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        res.end(data);
      } else {
        log(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server error");
      }
    });
  } else if (req.url === "/logo.png") {
    fs.readFile(path.join(__dirname, "logo.png"), (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(data);
      } else {
        log(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server error");
      }
    });
  } else if (req.url === "/about") {
    fs.readFile(path.join(__dirname, "about.html"), (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else {
        log(data);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server error");
      }
    });
  } else if (req.url === "/contact-me") {
    fs.readFile(path.join(__dirname, "contact-me.html"), (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else {
        log(data);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server error");
      }
    });
  } else if (req.url === "/style.css") {
    fs.readFile(path.join(__dirname, "style.css"), "utf8", (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      } else {
        log(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server error");
      }
    });
  } else {
    fs.readFile(path.join(__dirname, "404.html"), (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else {
        log(data);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server error");
      }
    });
  }
});

server.listen(8080, () => {
  log("Server is running on http://localhost:8080");
});
