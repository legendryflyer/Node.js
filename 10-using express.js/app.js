const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middlewere");
  next(); //allow the request to exicute to the next middlewere in line
});

app.use((req, res, next) => {
  console.log("in another  middlewere");
  res.send("<h1>Hellow from Express </h1>");
  //this will exicute when we use next()
});
const server = http.createServer(app);

server.listen(3000);
