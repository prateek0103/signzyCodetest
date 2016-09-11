var express = require("express");
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: '<your MySQL username here>',
    password: '<your MySQL password here>',
    socketPath: "/var/run/mysqld/mysqld.sock",
    database: 'name'
});

connection.connect();

var app = express();

app.get("/search/:query", function(req, res) {
    if (req.params.query.length < 3) res.status(400).send("BAD REQUEST");
    else {
        var query = "SELECT * FROM `nameCombinations` WHERE (CONVERT(`username` USING utf8mb4) LIKE '%" + req.params.query + "%') LIMIT 5";
        console.log(query);
        connection.query(query, function(err, rows) {
            if (err) throw err;
            res.status(200).send(rows);
        });
    }
});

app.listen(8082, function(err) {
    if (err) throw err;
    console.log("Listening on port 8082");
});