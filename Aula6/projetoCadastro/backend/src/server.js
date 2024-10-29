const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json())
app.use(cors());
app.use(routes);

app.get('/', (req,res) =>{
    res.send("Funcionaaaaa!");
});

app.listen(3001, () =>{
    console.log('Servidor rodando na porta 3001');
});