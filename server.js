require('dotenv').config();
// Listagem das bibliotecas instaladas com npm:
const express = require('express');
const app = express();
const path = require("path");

const port = process.env.Port || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded()) //{extended: false}

// const bcrypt = require('bcrypt')
// const req = require("express/lib/request")
// const res = require("express/lib/response")
// const passport = require('passport')
// const initializePassport = require('./passport-config')
// const users = []


// Processo de Registro

// Inicio das Rotas:

app.get('/', (req, res) => {
  res.render('index.ejs');
});
app.get('/quem-somos', (req, res) => {
  res.render('quem-somos.ejs');
});
app.get('/blog', (req, res) => {
  res.render('blog.ejs');
});
app.get('/faq', (req, res) => {
  res.render('faq.ejs');
});
app.get('/contato', (req, res) => {
  res.render('contato.ejs');
});
app.get(
  '/cajui-da-conservacao-do-cerrado-a-cena-gastronomica-da-capital-federal',
  (req, res) => {
    res.render(
      'cajui-da-conservacao-do-cerrado-a-cena-gastronomica-da-capital-federal.ejs',
    );
  },
);
app.get('/comida-comunidade-e-regeneracao', (req, res) => {
  res.render('comida-comunidade-e-regeneracao.ejs');
});
app.get('/mapa-do-site', (req, res) => {
  res.render('mapa-do-site.ejs');
});
app.get(
  '/osociobio-apresenta-recomendacoes-a-presidenciaveis-sobre-economia-sustentavel',
  (req, res) => {
    res.render(
      'osociobio-apresenta-recomendacoes-a-presidenciaveis-sobre-economia-sustentavel.ejs',
    );
  },
);
app.get('/quem-somos', (req, res) => {
  res.render('quem-somos.ejs');
});
app.get('/slow-food-indica', (req, res) => {
  res.render('slow-food-indica.ejs');
});
app.get('/login', (req, res) => {
  res.render('login.ejs');
});

// Fim das Rotas

app.listen(3000, () =>
  console.log(`Servidor rodando em http://localhost:${port}`),
); //Utilizar Template string para concatenar dados fora da pasta raiz
