const Sequelize = require('sequelize');
const db = require('../connection/db');

const Produto = db.define('produto', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Produto;

// 1 parametro NOME DA TABELA
// 2 parametro sao as colunas que devem ter na
// tabela