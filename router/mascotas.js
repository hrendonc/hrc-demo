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
        await Mascota.create(body)

        res.redirect('/mascotas')
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async (req, res)=>{
    const id = req.params.id
    try {
        const mascotaDB = await Mascota.findOne({ _id: id })
        res.render('detalle', {
            titulo: 'Actualizar datos',
            mascota: mascotaDB,
            error: false,
        })
    } catch (error) {
        console.log(error)
        res.render('detalle', {
            titulo: 'Actualizar datos',
            error: true,
            mensaje: 'No se encontro el ID seleccionado'
        })
    }
})

router.delete('/:id', async(req, res)=>{
    const id = req.params.id
    try {
        const mascotaDB = await Mascota.findByIdAndDelete({_id: id})
        if (mascotaDB) {
            res.json({
                estado: true,
                mensaje: 'Eliminado!'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'Problemas al intentar eliminar!'
            })
        }
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async(req, res)=>{
    const id = req.params.id
    const body = req.body

    console.log(id)
    console.log(body)
    try {
        const mascotaDB = await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false })
        console.log(mascotaDB)

        res.json({
            estado: true,
            mensaje: 'Informaci??n Actualizada correctamente!'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Hubo un error al editar!'
        })
    }
})

module.exports = router; 