const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index', {titulo: 'Inicio de dinamico'});
})

router.get('/servicios', (req, res)=>{
    res.render('servicios', {titulo: 'Servicios dinamico'});
})

module.exports = router;