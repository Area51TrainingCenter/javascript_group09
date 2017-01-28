var lista = ["izq-0", "izq-1", "izq-2", "centrada", "der-2", "der-1", "der-0"]

var quitar = function(){
	var elementos = document.querySelectorAll("img")

	elementos.forEach(function(el, ind){
		el.classList.remove("izq-0", "izq-1", "izq-2", "centrada", "der-2", "der-1", "der-0")
	})

/*	var longitud = elementos.length

	for(var i=0; i<longitud; i++){
		elementos[i].classList.remove("izq-0", "izq-1", "izq-2", "centrada", "der-2", "der-1", "der-0")
	}	*/
}


var asignar = function(){
	var elementos = document.querySelectorAll("img")

	elementos.forEach(function(el, ind){
		el.classList.add(lista[ind])
	})

/*	var longitud = elementos.length

	for(var i=0; i<longitud; i++){
		elementos[i].classList.add(lista[i])
	}*/
}


var cambiar = function(){
	var primerElemento = lista.shift()

	lista.push(primerElemento)

	quitar()
	asignar()
}



setInterval(cambiar, 3000)