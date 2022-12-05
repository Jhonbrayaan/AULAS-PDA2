const express = require("express");
const criandoCursoController = require("../controllers/curso/criandoCursoController");
const { pegandoCurso, pegandoUsuariosCadastradosCurso } = require("../controllers/curso/pegandoCursoController");

const cursoRoute = express.Router();

cursoRoute.post("/curso",criandoCursoController);

cursoRoute.get("/curso", pegandoCurso);

cursoRoute.get("/curso/usuario/:id", pegandoUsuariosCadastradosCurso);

module.exports = cursoRoute;
