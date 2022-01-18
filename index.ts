const http = require("http");

const PORT = 8080;

http
  .createServer(function (req, res) {
    console.log("Running at port 8080");
    res.write("Hello World!");
    res.end();
  })
  .listen(PORT);

console.log("Listening at port:", PORT);
