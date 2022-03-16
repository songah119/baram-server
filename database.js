var mysql = require('mysql');
const { host, user, port, password, database } = require("./secret.js");
var connection = mysql.createConnection({
host: host,
user: user,
port: port,
password: password,
database: database,
});

connection.connect();

//connection.query('select * from productInfo', function(error, results, fields){
  //if (error) {console.log(error);}
 // else{console.log('products:' , results);}
//});

module.exports =connection;
