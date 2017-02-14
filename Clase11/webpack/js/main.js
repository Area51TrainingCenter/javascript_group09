import multiplicar, {nombre, apellido, nombreCompleto, Util} from "./usuario"


console.log(nombre)
console.log(apellido)

console.log(nombreCompleto())

const util = new Util()
console.log(util.obtenerFechaHora())

console.log(multiplicar(10, 20))