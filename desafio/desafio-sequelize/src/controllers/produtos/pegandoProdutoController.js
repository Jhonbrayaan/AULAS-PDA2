const pegandoProdutoController = async (req,res)=>{
    const produto = require("../../")
    const produtos = await produto.findAll();
    return res.status(200).json({produtos: produtos})
}

module.exports =  pegandoProdutoController;