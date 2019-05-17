
module.exports = (app)=>{	
	//Rota admin
	app.get('/admin', (req,res)=>{
		res.render("admin/form_add_noticia.ejs")
	});

}