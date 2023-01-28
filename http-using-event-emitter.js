const http = require("http");
//do not use callback function in createServer
const server = http.createServer();
server.on("request", (req, res) => {
  res.end("hidfdf");
});
server.listen(3000);
