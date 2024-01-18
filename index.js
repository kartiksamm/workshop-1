const http = require("http");
const server = http.createServer((req, res) => {
  res.end("hello from the kartik");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to request on port no 5000");
});
