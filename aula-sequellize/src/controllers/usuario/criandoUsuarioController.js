const { hash } = require("bcrypt");

const criandoUsuarioController = async(req,res) =>{
    let db = require("../../connection/db");
    let usuario = require('../../models/usuario');
    // verifica se existe essa tabela no banco
    // caso nao exista cria
    // se existir somente insere dados na tabela
    await db.sync()
   /*desestruturação*/ 
    const {nome, email, senha} = req.body;
    const senhaHash = await hash(senha,8);
    const novoUsuario = await usuario.create({
      nome, email, senha:senhaHash 
    });
    //console.log("NOVO USUARIO:",novoUsuario);
    return res.json({usuario: novoUsuario});
}

module.exports = criandoUsuarioController;
// const nomeDaFuncaoController = async(req,res) => {

// }