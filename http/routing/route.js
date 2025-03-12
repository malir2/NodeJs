const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { contentType: "text/html" });
    res.end("<h1>Welcome to the homepage</h1>");
    return;
  } else if (req.url === "/api") {
    res.writeHead(200, { contentType: "application/json" });
    res.end(JSON.stringify({ name: "M Ali" }));
    return;
  } else {
    res.writeHead(404, { contentType: "text/plain" });
    res.end("Page not found");
    return;
  }
});

server.listen(3000, () => {
  console.log("Server is running on: http://localhost:3000");
});
