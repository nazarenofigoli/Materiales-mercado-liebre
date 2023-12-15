// ************ Requerimientos ************
const express = require('express');
const router = express.Router();

// ************ Controlador Requerido ************
const productsController = require('../controllers/productsController');

/*** OBTENER TODOS LOS PRODUCTOS ***/ 
router.get('/', productsController.index); 

/*** CREAR UN PRODUCTO ***/ 
router.get('/create', productsController.create); // Mostrar el formulario para crear un nuevo producto
router.post('/create', productsController.store); // Almacenar un nuevo producto

/*** OBTENER UN PRODUCTO ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDITAR UN PRODUCTO ***/ 
router.get('/edit/:id', productsController.edit); // Mostrar el formulario para editar un producto
router.put('/edit/:id', productsController.update); // Actualizar un producto

/*** ELIMINAR UN PRODUCTO***/ 
router.delete('/delete/:id', productsController.destroy); 

module.exports = router;