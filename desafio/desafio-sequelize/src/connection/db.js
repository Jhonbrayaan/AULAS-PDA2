const Sequelize = require("sequelize");
//  pessoa = nome, cpf, idade
//  pessoa("guilherme", 425261271, 17)

if(process.env.ENVIRONMENT === 'production'){
    console.log("PRODCTION")
    const sequelize = new Sequelize(
        process.env.DATABASE_NAME,
        process.env.DATABASE_USERNAME,
        process.env.DATABASE_PASSWORD,
        {
           dialect:'mysql',
           host:process.env.DATABASE_HOST,
           port:process.env.DATABASE_PORT
        }
    )
    module.exports = sequelize;
}else {
    console.log("STAGING");
    const sequelize = new Sequelize(
        process.env.DATABASE_NAME_TESTE,
        process.env.DATABASE_USERNAME_TESTE,
        process.env.DATABASE_PASSWORD_TESTE,
        {
           dialect:'mysql',
           host:process.env.DATABASE_HOST_TESTE,
           port:process.env.DATABASE_PORT_TESTE
        }
    )
    module.exports = sequelize;
}




// 1 parametro nome do banco de dados
// 2 parametro username do banco de dados
// 3 parametro password do banco de dados
// 4 parametro é um objeto que contem qual é o banco de dados,
// onde esta rodando e em qual porta