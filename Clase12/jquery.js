		Array.prototype.html = function(texto) {
			this.innerHTML = texto
		}

	function $(elementoHTML){
		let elementos = Array.from(document.querySelectorAll(elementoHTML))
		// console.log(elementos)

		this.addClass = function(miClase) {
			elementos.forEach(function(item){
				item.classList.add(miClase)
			})
		}

		this.removeClass = function(miClase) {
			elementos.forEach(function(item){
				item.classList.remove(miClase)
			})
		}

		this.eq = function(num) {
			console.log(elementos[num])
			return elementos[num]
		}

		// console.log(elementos.prototype)




		return this
	}