const { validationCreate } = require("../../validators/validators");

const criandoCursoController = async(req,res) =>{
    let db = require("../../connection/db");
    let curso = require('../../models/curso');
    // verifica se existe essa tabela no banco
    // caso nao exista cria
    // se existir somente insere dados na tabela
    await db.sync()
   /*desestruturação*/ 
    const {nome, descricao} = req.body;
    const novoCurso = await curso.create({
      id: 1,
      nome, 
      descricao
    });
    //console.log("NOVO curso:",novocurso);
    return res.json({curso: novoCurso});
}

module.exports = criandoCursoController;

// const nomeDaFuncaoController = async(req,res) => {

// }