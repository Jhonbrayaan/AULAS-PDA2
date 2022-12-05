const deletandoProdutoController = async (req,res)=>{
    let produto = require('../../models/produto');
    const id = req.params.id;
    const produtoExistente = await produto.findByPk(id); 
    await produto.destroy({where: {
      id: id
    }});
    return res.json({produtoDeletado});
}

module.exports = deletandoProdutoController;