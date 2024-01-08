const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');


const controller = {
registro: (req, res) => {
    const{id}= req.params;
    res.render('registro',{})


},

register: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
    // No hay errores, seguimos adelante.
    } else {
    // Si hay errores, volvemos al formulario con los mensajes.
    res.render('registro', { errors: errors.mapped(), old: req.body });
    }
}}




module.exports = controller;