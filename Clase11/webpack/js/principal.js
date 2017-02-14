import {Alarma} from "./alarmaClase"

const h1 = document.querySelector("h1")
const horaAlarma = {horas: 20, minutos: 29, segundos: 50}

const alarma = new Alarma(h1)
alarma.agregarAlarma(horaAlarma)
alarma.iniciar()