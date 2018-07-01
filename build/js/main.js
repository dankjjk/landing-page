$(document).ready(function() {
	var burger = document.querySelector('.header__burger'),
			header = document.querySelector('.header__menu');

	burger.onclick = function() {
		header.classList.toggle('header__opened');
	}
});