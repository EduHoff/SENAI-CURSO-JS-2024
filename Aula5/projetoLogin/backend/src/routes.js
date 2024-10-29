const express = require('express');
const routes = express.Router();

const user = [{
    id: 1,
    name: 'Exemplo',
    email: 'exemplo@exemplo.com',
    password: '123456',
    id: 2,
    name: 'Eduardo',
    email: 'eduardo@gmail.com',
    password: '123456'
}];

routes.post('/login', (req, res) =>{
    const {email, password} = req.body;

    const user = users.find(user => user.email === email && user.password === password);

    if(user){
        res.status(200).json(user);
    }
    res.status(401).json({menssage: 'Credenciás inválidas'});
    res.send(email);
});

module.exports = routes;