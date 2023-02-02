const http = require("http");
const { readFileSync } = require("fs");
//get html file
const index = readFileSync("index.html");
const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.url === "/") {
    //headers

    res.writeHead(200, { "content-type": "text/html" });
    res.write(index);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>NOT FOUND</h1>");
    res.end();
  }
});
server.listen(3000);
