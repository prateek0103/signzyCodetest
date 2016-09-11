var express = require("express");
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'astronaut',
    socketPath: "/var/run/mysqld/mysqld.sock",
    database: 'name'
});

connection.connect();

var app = express();

app.get("/search/:query", function (req, res) {
    var query = "SELECT * FROM `nameCombinations` WHERE (CONVERT(`username` USING utf8mb4) LIKE '%" + req.params.query + "%') LIMIT 5";
    console.log(query);
    connection.query(query, function(err, rows){
     if(err) throw err;
     res.status(200).send(rows);
     //connection.end();
  });
});

app.listen(8082, function(err){
    if(err) throw err;
    console.log("Listening on port 8082");
});