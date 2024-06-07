const http = require("http");

// function rqListner(req, res) {}
// http.createServer(rqListner);

// http.createServer(function (req, res) {}); // anonymous function ...a function with out name

const server = http.createServer((req, res) => {
  console.log(req);
}); // arrow function ... this code runs the server but din't quit the process

// const server = http.createServer((req, res) => {
//   console.log(req);
//   process.exit();
// }); //now it did quit the process and bring us bank on the new line in terminal.this will quit thw server.

server.listen(3000);
