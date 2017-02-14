class Utiles {
	static obtenerTiempo(){
		const tiempo = new Date()
		const horas = tiempo.getHours()

		if(horas<12) return "Mañana"
		if(horas>=12 && horas<18) return "Tarde"
		if(horas>=18) return "Noche"
	}
}