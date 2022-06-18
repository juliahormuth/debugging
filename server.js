const Http = require("http");
const PORT = 3000;

Http.createServer((req, res) => {
  res.end("Hey there!");
}).listen(PORT, () => console.log("The server is running at", PORT));
