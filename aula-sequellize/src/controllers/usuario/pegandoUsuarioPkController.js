
const pegandoUsuarioPkController = async (req,res)=>{
    const curso = require('../../models/curso');
    let usuario = require('../../models/usuario');
    const id = req.params.id;
    const usuarios = await usuario.findByPk(id, { include: curso});
    return res.status(200).json({usuarios: usuarios})
}

module.exports =  pegandoUsuarioPkController ;