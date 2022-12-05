const express = require('express');
const usuarioRoute = require('../src/routes/usuario.routes');
const cursoRoute = require("../src/routes/curso.routes");
const app = express();
const port = 3000;
require("dotenv/config");

app.use(express.json());
app.use(usuarioRoute);
app.use(cursoRoute);

app.listen(port, ()=>{
    console.log('Server is runner🚀');
})