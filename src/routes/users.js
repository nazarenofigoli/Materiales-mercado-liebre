const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const usersController = require('../controllers/usersController.js');

const validateRegister = [
    check('nombre')
    .notEmpty().withMessage('Debes completar el nombre').bail()
    .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),
    check('apellido')
    .notEmpty().withMessage('Debes completar el apellido').bail()
    .isLength({ min: 5 }).withMessage('El apellido debe tener al menos 5 caracteres'),
    check('email')
    .notEmpty().withMessage('Debes completar el email').bail()
    .isEmail().withMessage('Debes ingresar un email válido'),
    check('contraseña')
    .notEmpty().withMessage('Debes completar la contraseña').bail()
    .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres')
]


router.get('/registro',usersController.registro);
router.post('/registro',validateRegister,usersController.register);



module.exports = router;