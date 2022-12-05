const pegandoCurso = async (req,res)=>{
    let db = require("../../connection/db");
    let curso = require('../../models/curso');
    await db.sync()
    const cursos = await curso.findAll();
    return res.status(200).json({cursos: cursos})
}

const pegandoUsuariosCadastradosCurso = async (req,res)=>{
    let curso = require('../../models/curso');
    let usuario = require('../../models/usuario');
    let id = req.params.id;
    const cursos = await curso.findByPk(id, { include: usuario});
    return res.status(200).json({cursos: cursos})
}


module.exports = { pegandoCurso, pegandoUsuariosCadastradosCurso };