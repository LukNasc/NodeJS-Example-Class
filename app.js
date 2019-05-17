//importando o server
const app = require('./config/server')
//importando a rota home
const home = require("./app/routs/home")
//importando a rota noticias
const noticias = require("./app/routs/noticias")
//importando a rota de admin
const admin = require("./app/routs/formulario_inclusao_noticia")
//Executando a rota home
home(app);
//Executando a rota noticia
noticias(app);
//Executando a rota admin
admin(app);


//Definindo uma porta para o servidor rodar
const porta = 3000;

//Criando um listen pra porta criada
//listen(<Porta>, functionCallBack)
app.listen(porta, ()=>{
	console.log("Servidor rodando na porta "+porta);
});
