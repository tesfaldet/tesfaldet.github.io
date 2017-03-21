window.onload = function() {
	var top = document.getElementsByClassName('top')[0],
		bottom = document.getElementsByClassName('bottom')[0],
		left = document.getElementsByClassName('left')[0],
		right = document.getElementsByClassName('right')[0],
		front = document.getElementsByClassName('front')[0],
		back = document.getElementsByClassName('back')[0],
		space = document.getElementsByClassName('space')[0];

	function enlarge() {
		front.style["-webkit-transform"] = "translateY(150px) scale(2)";
		front.innerHTML = "<p style=\"font-size: 0.85em; text-align: left; margin: 10px;\">MSc student studying computer vision and machine learning at York University.</p><p style=\"font-size: 0.85em; text-align: left; margin: 10px;\">Advisors: Dr. Kosta Derpanis and Dr. Marcus Brubaker.</p><p style=\"font-size: 0.85em; text-align: left; margin: 10px;\">Interested in: texture synthesis, style transfer, and motion analysis.</p>"
	}

	function reset() {
		front.style["-webkit-transform"] = "translateY(200px)";
		front.innerHTML = "<p>About Me</p><span class=\"mega-octicon really-more-mega octicon-mark-person\"></span>"
	}

	front.onmouseover = function() {
		enlarge();
	};

	front.onmouseout = function() {
		reset();
	};
};
