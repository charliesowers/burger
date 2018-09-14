var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(table, colName, burger, cb) {
    var queryString = "INSERT INTO ??(??) values (?)";
    console.log(queryString);
    connection.query(queryString, [table, colName, burger], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  updateOne: function(table, colName, colVal, id, cb) {
    var queryString =
      "update ?? set ?? = ? where id = ?";

    connection.query(
      queryString,
      [table, colName, colVal, id],
      function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      }
    );
  }
};

module.exports = orm;