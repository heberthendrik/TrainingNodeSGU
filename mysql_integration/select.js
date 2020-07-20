var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "dummy_database"
});

con.connect(function(err) {
  // try to connect to database object
  if (err) throw err;
  console.log("Connected!");

  var query = "masukan query kalian disini";
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

});