const express = require("express");
const criandoUsuarioController = require("../controllers/usuario/criandoUsuarioController");
const {pegandoUsuarioController} = require("../controllers/usuario/pegandoUsuariosController");

const usuarioRoute = express.Router();

usuarioRoute.post("/usuario",criandoUsuarioController);

usuarioRoute.get("/usuario", pegandoUsuarioController);
  
usuarioRoute.put("/:id", async (req,res)=>{
    let usuario = require('../models/usuario');
    const id = req.params.id;
    const { nome, email } = req.body;
    const pessoa = await usuario.findByPk(id); 
    await usuario.update({
      nome: nome || pessoa.nome,
      email: email || pessoa.email
    }, { where: { id: id }});
    const usuarioAtualizado = await usuario.findByPk(id);
    return res.json({usuario: usuarioAtualizado});
});
  
usuarioRoute.delete("/:id", async (req,res)=>{
    let usuario = require('../models/usuario');
    const id = req.params.id;
    const usuarioDeletar = await usuario.destroy({where: {
      id: id
    }});
    return res.json({usuarioDeletar});
});

module.exports = usuarioRoute;
