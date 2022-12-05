const Sequelize = require('sequelize');
const db = require('../connection/db');
const Usuario = require('./usuario');

const Curso = db.define('curso', {
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
    }
});

module.exports = Curso;

// 1 parametro NOME DA TABELA
// 2 parametro sao as colunas que devem ter na
// tabela