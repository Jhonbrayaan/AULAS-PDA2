const { compare } = require('bcrypt');

const loginUsuarioController = async (req,res)=>{
    let usuario = require('../../models/usuario');
    const { email, senha } = req.body;
    const usuarioExistente = await usuario.findOne({ where: { email: email}});
    const senhaMatch = await compare(senha, usuarioExistente.senha);
    if(!senhaMatch){
        return res.json({message: "email ou senha invalido"});
    }
    return res.json({usuario: usuarioExistente});
}

module.exports = loginUsuarioController;


