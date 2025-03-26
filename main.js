window.onload = function () {
	window.scrollTo(0, 0)
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('burger').addEventListener('click', function () {
		document.querySelector('header').classList.toggle('open')
	})
})