module.exports = (app)=>{
	//Rota de noticia
	app.get('/noticias', (req,res)=>{
		res.render("noticias/noticias.ejs")
	});
}