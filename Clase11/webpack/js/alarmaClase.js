import {Reloj} from "./relojClase"

export class Alarma extends Reloj {
	constructor(elemento, horaAlarma){
		super(elemento)
	}

	agregarAlarma(horaAlarma) {
		this.setearAlarma(horaAlarma)
	}

}