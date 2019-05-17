module.exports = (app)=>{
	//Rota principal
		app.get('/', (req,res)=>{
			res.render("home/")
		});
}
