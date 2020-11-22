var mysql = require('mysql');

var db = mysql.createConnection({
    //host: 'localhost',
    //user : 'root',
    //password: '',
    //database: 'shoppingapi',
    //debug: false

    host: 'ns6591.hostgator.com',
    user: 'belladas_wp210',
    password: '123456789',
    database: 'belladas_wp210',
    debug: false

});


db.connect(function(err) {
    if (err) {
        //throw err
        //imprimir error
        //console.log(err);
        console.log('No se conecto ala base de datos ');
    } else {
        console.log("Se conecto ala base de datos Ecommerce")
    };
});

module.exports = db;