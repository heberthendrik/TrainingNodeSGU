var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "dummy_database"
});

con.connect(function(err) {
    if (err) throw err;
    
    var sql = "DELETE FROM customers WHERE name = 'Company Inc'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });