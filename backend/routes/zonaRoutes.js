const express = require('express');
const router = express.Router();
const {
    agregarZonaView,
    agregarZona,
    listarZonasView
} = require('../controllers/zonaController.js');



//get
router.get('/agregarZona', agregarZonaView);
router.get('/modificarZona', );
router.get('/eliminarZona', );
router.get('/listarZonas', listarZonasView);

//post
router.post('/agregarZona', agregarZona);


module.exports= router;