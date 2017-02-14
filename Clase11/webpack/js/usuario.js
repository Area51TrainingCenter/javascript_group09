export const nombre = "Sergio"
export const apellido = "Hidalgo"

export function nombreCompleto(){
	return `${nombre} ${apellido}`
}


export class Util {
	obtenerFechaHora(){
		return new Date()
	}
}

export default function multiplicar(a, b) {
	return a*b
}