const express = require('express');
const routes = require('./routes.js');
const cors = require('cors');




const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
    res.send("Hellow World!");
});

app.listen(3001, () =>{
    console.log('Serve is running on port 3001');
});