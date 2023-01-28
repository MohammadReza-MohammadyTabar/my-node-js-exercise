const { read } = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hi");
  }
});
server.listen(3000);
