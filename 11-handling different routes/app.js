const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("Hello from middleware"); // this will always exicute
});

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.send('<h1>this is "Product page"</h1>');
});

app.use("/", (req, res, next) => {
  console.log("In another middleware 2");
  res.send('<h1>this is "Home page"</h1>');
});

app.listen(3000);
