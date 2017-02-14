export class Reloj {
	constructor(elemento){
		this.elemento = elemento
		this.listaAlarmas = []
	}

	actualizar(){
		this.tiempo = new Date()

		this.horas = this.tiempo.getHours()
		this.minutos = this.tiempo.getMinutes()
		this.segundos = this.tiempo.getSeconds()

		this.horas = this.horas < 10 ? `0${this.horas}` : this.horas
		this.minutos = this.minutos < 10 ? `0${this.minutos}` : this.minutos
		this.segundos = this.segundos < 10 ? `0${this.segundos}` : this.segundos

		this.elemento.innerHTML = `${this.horas}:${this.minutos}:${this.segundos}`

		this.verificarAlarmas(this.horas, this.minutos, this.segundos)
	}

	verificarAlarmas(horas, minutos, segundos){
		for(let alarma of this.listaAlarmas) {
			if(alarma.horas == horas && alarma.minutos == minutos && alarma.segundos == segundos) {
				console.log("Alarma sonando")
			}
		}
	}

	iniciar(){
		this.actualizar()

		setInterval(()=>this.actualizar(), 1000)
	}

	setearAlarma(horaAlarma) {
		this.listaAlarmas.push(horaAlarma)
	}
}
