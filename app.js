const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

require('dotenv').config(); //Modulo para usar las variables de entorno

const port = process.env.PORT; //Coexion a la DB Mongo a travez de la variable de entorno

//Conexión a la base de datos
const mongoose = require('mongoose');

const uri = `mongodb://localhost:27017/${process.env.DBNAME}`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log('Base de datos Mongo conectada'))
    .catch(e=>console.log('Error de conexión', e))

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Midleware
app.use(express.static(__dirname + '/public'));

//Rutas
app.use('/', require('./router/rutas.js'));
app.use('/mascotas', require('./router/mascotas.js'));

//Midleware
app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo: 'Error 404',
        descripcion: 'Error 404: La página solicitada no existe!'
    });
})

app.listen(port, ()=>{
    console.log(`Esperando solicitud en el puerto: ${port}`)
})
