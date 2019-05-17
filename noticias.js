var http = require('http');

http.createServer((req,res)=>{
	var categoria = req.url;
	if(categoria == '/tecnologia'){
		res.end("Noticias de Tecnologia");

	}else if(categoria == '/moda'){
		res.end("Noticias de Moda");

	}else if(categoria == '/beleza'){
		res.end("Noticias de Beleza");

	}else{
		res.end("Página Inicial");
	}
}).listen(3000);