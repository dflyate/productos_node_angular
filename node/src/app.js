require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

const app = express();      //instancia de express

//admitir tipos de dato
app.use(express.json())

//configuracion
app.set('port',port);


//routes rutas
app.use('/api',require('./routes/rutas'))



//iniciar express
app.listen(app.get('port'), (error) => {
    if(error){
        console.log(error);
    }else{
        console.log('servidor iniciado en el puerto '+port);
    }
})