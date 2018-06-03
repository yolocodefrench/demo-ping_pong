PingPong.get("https://talaikis.com/api/quotes/random/", function(data){
	data = JSON.parse(data);
	data = {"datas":{'message':data}};
	console.log(data);
	PingPong.render("example_pres", "./templates/template.html", data)
})