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

  
  var sql = "UPDATE customers SET address = 'Test alamat baru SGU' WHERE name = 'Company Inc' ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
  

});