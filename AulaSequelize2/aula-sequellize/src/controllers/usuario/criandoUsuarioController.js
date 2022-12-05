const { validationCreate } = require("../../validators/validators");

const criandoUsuarioController = async(req,res) =>{
    let db = require("../../connection/db");
    let usuario = require('../../models/usuario');
    // verifica se existe essa tabela no banco
    // caso nao exista cria
    // se existir somente insere dados na tabela
    await db.sync({force: true})
   /*desestruturação*/ 
    const {nome, email} = req.body;
    const novoUsuario = await usuario.create({
      nome, email
    });
    //console.log("NOVO USUARIO:",novoUsuario);
    return res.json({usuario: novoUsuario});
}

module.exports = criandoUsuarioController;
// const nomeDaFuncaoController = async(req,res) => {

// }