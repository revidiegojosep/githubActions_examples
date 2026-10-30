const http = require("http");
const port = 3000;

if (port === 3000) {
  console.log("Puerto 3000 activo");
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("Hola Mundo");
});

server.listen(port);
