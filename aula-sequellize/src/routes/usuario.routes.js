const express = require("express");
const criandoUsuarioController = require("../controllers/usuario/criandoUsuarioController");
const loginUsuarioController = require("../controllers/usuario/loginUsuarioController");
const {pegandoUsuarioController} = require("../controllers/usuario/pegandoUsuariosController");
const pegandoUsuarioPkController = require("../controllers/usuario/pegandoUsuarioPkController");
const alterandoUsuarioController = require("../controllers/usuario/alterandoUsuarioController");

const usuarioRoute = express.Router();

usuarioRoute.post("/usuario",criandoUsuarioController);

usuarioRoute.get("/usuario", pegandoUsuarioController);

usuarioRoute.get("/usuario/:id", pegandoUsuarioPkController);

usuarioRoute.get("/usuario/login",loginUsuarioController);
  
usuarioRoute.put("/usuario/:id", alterandoUsuarioController);
  
usuarioRoute.delete("/:id", async (req,res)=>{
    let usuario = require('../models/usuario');
    const id = req.params.id;
    const usuarioDeletar = await usuario.destroy({where: {
      id: id
    }});
    return res.json({usuarioDeletar});
});

module.exports = usuarioRoute;
