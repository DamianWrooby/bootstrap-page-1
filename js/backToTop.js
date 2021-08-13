window.onload = function () {
	var arrowUp = document.querySelector("#back-to-top");
	var rootElement = document.documentElement;

	function toggleArrow(e) {
		if (window.scrollY >= 500) {
				arrowUp.classList.add("visible");
		} else {
			arrowUp.classList.remove("visible");
		}
	}

	function scrollToTop() {
		rootElement.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	arrowUp.addEventListener("click", scrollToTop);
	window.addEventListener("scroll", toggleArrow);
};
