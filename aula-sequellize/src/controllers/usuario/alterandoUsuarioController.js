
const alterandoUsuarioController = async (req,res)=>{
    let usuario = require('../../models/usuario');
    const curso = require('../../models/curso');
    const id = req.params.id;
    const { nome, email } = req.body;
    const pessoa = await usuario.findByPk(id, { include: curso}); 
    await usuario.update({
        nome: nome || pessoa.nome,
        email: email || pessoa.email
      }, { where: { id: id }});
    const usuarioAtualizado = await usuario.findByPk(id);
    return res.json({usuarioAtualizado: usuarioAtualizado });
}

module.exports = alterandoUsuarioController;