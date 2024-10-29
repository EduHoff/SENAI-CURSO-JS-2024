const express = require('express');
const routes = express.Router();

const usuarios = [];

routes.post('/cadastro', async (req,res) =>{
    const {email, password} = req.body;
    //res.send('Rotas configuradas');

    if(!email || !password){
        return res.status(400).json({error: "Preencha todos os campos"});
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
        return res.status(400).json({message: 'Email invalido !'});
    }

    if(password.length < 8){
        return res.status(400).json({message: 'Usuário já cadastrado'})
    }
    //Verificar se ha outro usuário já cadastrado com o mesmo email
    const userExist = usuarios.some(user => user.email === email);
    if(userExist){
        return res.status(400).json({message: 'Usuário já cadastrado'})
    }

    usuarios.push({email, password});
    res.status(201).json({message: 'Usuário Cadastrado com Sucesso!'});

    console.log(usuarios);


});

module.exports = routes;