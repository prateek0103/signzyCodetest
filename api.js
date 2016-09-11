var express = require("express");
var app = express();

app.get("/search/:fname/:lname", function (req, res) {
    var fname = req.params.fname;
    var lname = req.params.lname;
    console.log(fname, lname);
});

app.listen(8082, function(err){
    if(err) throw err;
    console.log("Listening on port 8082");
});