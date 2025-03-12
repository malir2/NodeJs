const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  //   const file = fs.readFileSync("./index.html");

  const fileStream = fs.createReadStream("./index.html");
  fileStream.pipe(res);

  res.writeHead(200, { contentType: "text/html" });
  //   res.end(file);
});

server.listen(3000, () => {
  console.log("Server is running on: http://localhost:3000");
});
