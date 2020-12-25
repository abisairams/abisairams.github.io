(function (){

	document.onscroll = function (e) {
		const scrollTop = e.target.scrollingElement.scrollTop
		const brand = document.getElementById('brand')

		if (scrollTop > 30) {
			brand.classList.add('hide')
		} else {
			brand.classList.remove('hide')
		}
	}
	
})()