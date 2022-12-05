const criandoProdutoController = async(req,res) =>{
    let db = require("../../connection/db");
    let produto = require('../../models/produto');
    // verifica se existe essa tabela no banco
    // caso nao exista cria
    // se existir somente insere dados na tabela
    await db.sync()
   /*desestruturação*/ 
    const {nome, descricao, preco} = req.body;
    const novoProduto = await produto.create({
      id: "1",
      descricao,
      preco
    });
    //console.log("NOVO produto:",novoProduto);
    return res.json({produto: novoProduto});
}

module.exports = criandoProdutoController;

// const nomeDaFuncaoController = async(req,res) => {

// }