var http = require("http");
var hostname = "127.0.0.1";
var port = 8080;

const server = http.baramServer(function (req, res) {
  const url = req.url;
  const method = req.method;
  if (path === "products") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const products = JSON.stringify([
        {
          name: "name",
          maker: "maker",
          price: 400,
        },
      ]);
      res.end(products);
    }
  }
});

server.listen(port, hostname);

