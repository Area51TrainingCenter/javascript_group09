	var generarEleccionComputadora = function(){
		var aleatorio = Math.random()
		var eleccion

		if(aleatorio < 0.33) {
			eleccion = "piedra"
		} else if(aleatorio < 0.66) {
			eleccion = "papel"
		} else {
			eleccion = "tijera"
		}

		return eleccion
	}

	var verificarEstadoJuego = function(eleccionMia, eleccionPC){
		var empate = true
		// Mi elección es piedra
		if(eleccionMia=="piedra" && eleccionPC=="tijera") {
			console.log("Ganó usted")
			empate = false
		}

		if(eleccionMia=="piedra" && eleccionPC=="papel") {
			console.log("Ganó la computadora")
			empate = false
		}

		if(eleccionMia=="piedra" && eleccionPC=="piedra"){
			console.log("Empate")
		}


		// Mi elección es papel
		if(eleccionMia=="papel" && eleccionPC=="tijera") {
			console.log("Ganó la computadora")
			empate = false
		}

		if(eleccionMia=="papel" && eleccionPC=="piedra") {
			console.log("Ganó usted")
			empate = false
		}

		if(eleccionMia=="papel" && eleccionPC=="papel"){
			console.log("Empate")
		}

		// Mi elección es tijera
		if(eleccionMia=="tijera" && eleccionPC=="papel") {
			console.log("Ganó usted")
			empate = false
		}

		if(eleccionMia=="tijera" && eleccionPC=="piedra") {
			console.log("Ganó la computadora")
			empate = false
		}

		if(eleccionMia=="tijera" && eleccionPC=="tijera"){
			console.log("Empate")
		}

		return empate
	}