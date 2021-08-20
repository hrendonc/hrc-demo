const express = require('express');
const app = express();
const port = 3000;

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index', {titulo: 'Inicio de dinamico'});
})

app.get('/servicios', (req, res)=>{
    res.render('servicios', {titulo: 'Servicios dinamico'});
})

app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo: 'Error 404',
        descripcion: 'Error 404: La página solicitada no existe!'
    });
})

app.listen(port, ()=>{
    console.log(`Esperando solicitud en el puerto: ${port}`)
})
