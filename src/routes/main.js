// ************ Requerimientos ************
const express = require('express');
const router = express.Router();

// ************ Controlador Requerido ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); // Mostrar la página principal
router.get('/search', mainController.search); // Mostrar la página de búsqueda

module.exports = router;
