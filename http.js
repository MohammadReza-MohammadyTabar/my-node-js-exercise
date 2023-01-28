const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hellowdfgff");
  } else if (req.url === "/about") {
    res.end("about");
  } else {
    res.end(`
  <h1>error</1>
  `);
  }
});
server.listen(3000);
