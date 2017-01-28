
// var btn = document.getElementById("btn")
var body = document.body

var ejecutarSonido = function(e){
	var listaAudios = document.querySelectorAll("audio")
	var listaArticles = document.querySelectorAll("article")
	
	listaAudios.forEach(function(el, ind){
		var codigoTecla = el.getAttribute("data-rel")

		if(codigoTecla==e.keyCode) {
			el.currentTime = 0
			el.play()
		}
	})

	listaArticles.forEach(function(el, ind){
		var codigoTecla = el.getAttribute("data-rel")

		if(codigoTecla==e.keyCode) {
			el.classList.add("ejecutando")
	    }
	})

/*	audio.currentTime = 0
	audio.play()	*/	
}

// btn.addEventListener("click", ejecutarSonido)
var listaArticles = document.querySelectorAll("article")
listaArticles.forEach(function(el, ind){
	el.addEventListener("transitionend", function(evt){
		evt.target.classList.remove("ejecutando")
	})
})

body.addEventListener("keydown", ejecutarSonido)








