const express = require("express");
const app = express();
// app.use((req, res, next) => {
//   console.log("first middleware");

//   next();
// });

// app.use((req, res, next) => {
//   console.log("second middleware");
//   res.send("<h1>second middleware</h1>");
// });

app.use("/users", (req, res, next) => {
  console.log("second middleware");
  res.send("<h1>this is the users page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("first middleware");
  res.send("<h1>this is the home page</h1>");
});

app.listen(3000);
