const Sequelize = require("sequelize");
const sequelize = new Sequelize("slowfu", "root", "0000", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(function () {
    console.log("Conectado com sucesso");
  })
  .catch(function (erro) {
    console.log("Falha ao conectar: " + erro);
  });

//modulo postagem
const Cadastro = sequelize.define('cadastro',{
    nome:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    },
    telefone:{
        type: Sequelize.STRING
    },
    whatsapp:{
      type: Sequelize.STRING
    },
})

cadastro.sync({force: true})

//modulo Post
// const Postar = sequelize.define("postagem", {
//   titulo: {
//     type: Sequelize.STRING
//   },
//   descricao: {
//     type: Sequelize.TEXT
//   },
//   telefone: {
//     type: Sequelize.INTEGER
//   },
//   imagem: {
//     type: Sequelize.STRING
//   },
//   whatsapp: {
//     type: Sequelize.STRING
//   },
// });

//Postar.sync({force:true})

/*Postagem.create({
  titulo: "Aqui vai meu titulo",
  conteudo:
    "Evidentemente, a complexidade dos estudos efetuados cumpre um papel essencial na formulação dos procedimentos normalmente adotados.",
});*/

// Usuario.create({
//     nome: "Pedro",
//     sobrenome: "Rodante",
//     idade: 26,
//     email: "pedrorodantevicemte@gmail.com"
// })
