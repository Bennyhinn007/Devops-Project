const http = require("http");

http.createServer((req, res) => {
  res.end("CI/CD Pipeline Running 🚀");
}).listen(3000);

console.log("Server running on port 3000");
