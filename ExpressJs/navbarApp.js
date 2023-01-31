const http = require("http");
const { readFileSync } = require("fs");
//get html file
const index = readFileSync("navbar-app/index.html");
const indexStyle = readFileSync("navbar-app/styles.css");
const indexLogo = readFileSync("navbar-app/logo.svg");
const indexLogic = readFileSync("navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  console.log(req.method);
  let url = req.url;
  if (url === "/") {
    //headers

    res.writeHead(200, { "content-type": "text/html" });
    res.write(index);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(indexStyle);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(indexLogo);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(indexLogic);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>NOT FOUND</h1>");
    res.end();
  }
});
server.listen(3000);
