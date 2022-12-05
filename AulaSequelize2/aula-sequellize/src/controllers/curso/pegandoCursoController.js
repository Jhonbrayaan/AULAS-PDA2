const pegandoCurso = async (req,res)=>{
    let db = require("../../connection/db");
    let curso = require('../../models/curso');
    await db.sync()
    const cursos = await curso.findAll();
    return res.status(200).json({cursos: cursos})
}


module.exports = { pegandoCurso };