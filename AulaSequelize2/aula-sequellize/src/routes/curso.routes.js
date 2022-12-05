const express = require("express");
const criandoCursoController = require("../controllers/curso/criandoCursoController");
const { pegandoCurso } = require("../controllers/curso/pegandoCursoController");

const cursoRoute = express.Router();

cursoRoute.post("/curso",criandoCursoController);

cursoRoute.get("/curso", pegandoCurso);

module.exports = cursoRoute;
