const http = require("node:http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead("200", { contentType: "text/plain" });
  res.end("Server is runing");
});

server.listen(port, () => {
  console.log(`Server is runing on: http://localhost:${port}`);
});
