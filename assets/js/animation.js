(function (){

	const animatedTitle = document.getElementById('animatedTitle')
	const message = 'Hello Ramos'

	function animate(str) {
		return new Promise(function (resolve, reject) {
			let counter = 0
			const intervalId = setInterval(function() {			
				if (str[counter] === ' ') {
					animatedTitle.innerHTML += str[counter]
					counter++
				}
				animatedTitle.innerHTML += str[counter]
				counter++

				if (counter >= str.length) {
					clearInterval(intervalId)
					setTimeout(function() {
						resolve()
					}, 200)
				}
			},60)
		})
	}

	animate(message).then(function () {
		const authorElem = document.getElementById('author')
		const welcomeElem = document.getElementById('welcome')

		authorElem.removeAttribute('hidden')
		welcomeElem.removeAttribute('hidden')
	})

})()
