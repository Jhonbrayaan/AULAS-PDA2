const express = require('express');
const produtoRoute = require('../src/routes/produto.routes');
const app = express();
const port = 3000;
require("dotenv/config");

app.use(express.json());
app.use(produtoRoute);


app.listen(port, ()=>{
    console.log('Server is runner🚀');
})