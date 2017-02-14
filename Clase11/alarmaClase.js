import {Reloj} from "./relojClase"

class Alarma extends Reloj {
	constructor(elemento, horaAlarma){
		super(elemento)
	}

	agregarAlarma(horaAlarma) {
		this.setearAlarma(horaAlarma)
	}

}