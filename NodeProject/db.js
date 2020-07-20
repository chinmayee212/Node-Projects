var  mysql = require('mysql');
var connection = mysql.createConnection({
    host :'localhost',
    user:'root',
    password :'',
    database :'bd_notes'
});

module.exports=connection;