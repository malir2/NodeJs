const https = require("http");
const { Worker } = require("worker_threads");

const server = https.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200);
    res.end("Home Page");
  }
  if (req.url == "/slow-page") {
    const worker = new Worker("./work-thread.js");

    worker.on("message", (j) => {
      res.writeHead(200);
      res.end("Slow Page" + " " + j);
    });
  }
});

server.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
