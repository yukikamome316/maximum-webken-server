const http = require("http");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("db.sqlite3");

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Access-Control-Allow-Origin": "*"});
  db.all("SELECT * FROM members", (err, rows) => {
    res.end(JSON.stringify(rows));
  });
});

server.listen(8000, () => { 
  console.log("8000でサーバー立てたで！");
});
