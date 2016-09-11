var mysql = require('mysql');
var fs = require('fs');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'astronaut',
    socketPath: "/var/run/mysqld/mysqld.sock",
    database: 'name'
});


var linereader = require("readline");

var firstname = linereader.createInterface({
    input: fs.createReadStream('firstnames.out')
});

var lastname = linereader.createInterface({
    input: fs.createReadStream('lastnames.out')
});

firstname.setMaxListeners(0);
lastname.setMaxListeners(0);

var query = " ";
var fullName = " ";
var nameArray = [];
connection.connect();

firstname.on('line', function(fname) {
    lastname.on('line', function(lname) {
        fullName = fname + ' ' + lname;
        var temp = new Array(fullName);
        nameArray.push(temp);
    });
}).on('close', function(){
  //console.log(nameArray);
  query = "INSERT INTO `nameCombinations` (`username`) VALUES ?";
  connection.query(query, [nameArray], function(err){
     if(err) throw err;
     connection.end();
  });
});
