const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'empresa_productos'
});

conexion.connect( (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('conexion exitosa');
    }
});

module.exports = conexion;
