const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');

router.get('/', async (req, res) => {
    try {
        const arrayMascotasDB = await Mascota.find();

        //Mostrar los datos
        res.render('mascotas', {
            arrayMascotas: arrayMascotasDB
        })
        
    } catch (error) {
        console.log(error)
    }
    
})

router.get('/crear', (req, res)=>{
    res.render('crear', {titulo: 'Crear nueva mascota'})
})

router.post('/', async (req, res)=>{
    const body = req.body;
    try {
        // Agregar info a la base de datos Metodo 1
        //const mascotaDB = new Mascota(body)
        //await mascotaDB.save()

        //Agregar info a la BD Metodo 2
        await Mascota.create(body)

        res.redirect('/mascotas')
    } catch (error) {
        console.log(error)
    }
})

module.exports = router; 