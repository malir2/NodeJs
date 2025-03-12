const http = require("node:http");

const server = http.createServer((req, res) => {
  const object = {
    name: "Ali",
    job: "Software Developer",
  };
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(object));
});

server.listen(3000, () => {
  console.log(`Server is runing on: http://localhost:3000`);
});
