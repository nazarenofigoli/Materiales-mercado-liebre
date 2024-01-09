const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');


const usersFilePath = path.join(__dirname, '../data/usersDataBase.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const controller = {
registro: (req, res) => {
    const{id}= req.params;
    res.render('registro',{})


},

register: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {

        // No hay errores, seguimos adelante.
        const user={
            nombre: req.body.nombre.trim(),
            apellido: req.body.apellido.trim(),
            email: req.body.email.trim(),
            contraseña: req.body.contraseña.trim(),
        } 
        users.push(user)

        const json = JSON.stringify(users);
		fs.writeFileSync(usersFilePath,json,"utf-8");
		res.redirect('/')

    } else {
    // Si hay errores, volvemos al formulario con los mensajes.
    res.render('registro', { errors: errors.mapped(), old: req.body });
   /* res.send(errors.mapped())*/
    
    }
}}




module.exports = controller;