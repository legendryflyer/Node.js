const http = require("http");
const { text } = require("stream/consumers");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>enter the massage</title></head>");
    res.write(
      '<body><form action="/massage" method="post"><input type="text" name="message"><button type="submit">submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>my first node.js page</title></head>");
  res.write("<body><h1>hello from my first node.js server </h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
