//Exportando o Express
var express = require('express');

//Executando a função retornada pelo express
var app = express();
//Definindo um gerenciador de views
app.set('view engine', 'ejs');
//definindo o diretório de views padrão
app.set('views','./app/views')
//exportando a variavel app
module.exports = app;