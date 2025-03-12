const https = require("http");

const server = https.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200);
    res.end("Home Page");
  }
  if (req.url == "/slow-page") {
    for (let index = 0; index < 6000000000; index++) {}
    res.writeHead(200);
    res.end("Slow Page");
  }
});

server.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
