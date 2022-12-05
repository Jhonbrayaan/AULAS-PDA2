const express = require("express");

const produtoRoute = express.Router();
const criandoProdutoController = require("../controllers/produtos/criandoProdutoController")
const pegandoProdutoController = require("../controllers/produtos/pegandoProdutoController")
const alterandoProdutoController = require("../controllers/produtos/alterandoProdutoController")
const deletandoProdutoController = require("../controllers/produtos/deletandoProdutoController")




produtoRoute.post("/produto",criandoProdutoController);

produtoRoute.get("/produto", pegandoProdutoController);

produtoRoute.put("/produto", alterandoProdutoController);

produtoRoute.delete("/produto/:id", deletandoProdutoController);

module.exports = produtoRoute;
