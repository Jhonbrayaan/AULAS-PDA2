const alterandoProdutoController = async (req,res)=>{
    let produto = require('../../models/produto');
    const id = req.params.id;
    const { nome, descricao, preco } = req.body;
    const produtoExistente = await produto.findByPk(id); 
    await produto.updati({
      nome: nome || produtoExistente.nome,
      descricao: descricao || produtoExistente.descricao,
      preco: preco || produtoExistente.preco
    }, { where: { id: id }});
    const produtoAtualizado = await produto.findByPk(id);
    return res.json({produto: produtoAtualizado});
}

module.exports = alterandoProdutoController;