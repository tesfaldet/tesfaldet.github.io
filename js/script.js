window.onload = function() {
	var top = document.getElementsByClassName('top')[0],
		bottom = document.getElementsByClassName('bottom')[0],
		left = document.getElementsByClassName('left')[0],
		right = document.getElementsByClassName('right')[0],
		front = document.getElementsByClassName('front')[0],
		back = document.getElementsByClassName('back')[0],
		space = document.getElementsByClassName('space')[0];

	function flatten() {
		top.style["-webkit-transform"] = "none";
		bottom.style["-webkit-transform"] = "translateX(400px)";
		left.style["-webkit-transform"] = "translateX(-200px)";
		right.style["-webkit-transform"] = "translateX(200px)";
		front.style["-webkit-transform"] = "translateY(200px)";
		back.style["-webkit-transform"] = "translateY(-200px)";
		space.style["-webkit-animation"] = "none";
		space.style["-webkit-transform"] = "rotateY(10deg) rotateX(20deg) rotateZ(10deg)";
	}

	function unflatten() {
		top.style["-webkit-transform"] = "rotateX(-90deg) translateZ(-100px)";
		bottom.style["-webkit-transform"] = "rotateX(90deg) translateZ(-100px)";
		left.style["-webkit-transform"] = "rotateY(90deg) translateZ(-100px)";
		right.style["-webkit-transform"] = "rotateY(270deg) translateZ(-100px)";
		front.style["-webkit-transform"] = "rotateY(0deg) translateZ(-100px)";
		back.style["-webkit-transform"] = "rotateY(180deg) translateZ(-100px)";
		space.style["-webkit-animation"] = "spin 10s infinite linear";
	}

	top.onmouseover = function() {
		flatten();
	};
	bottom.onmouseover = function() {
		flatten();
	};
	left.onmouseover = function() {
		flatten();
	};
	right.onmouseover = function() {
		flatten();
	};
	front.onmouseover = function() {
		flatten();
	};
	back.onmouseover = function() {
		flatten();
	};

	top.onmouseout = function() {
		unflatten();
	};
	bottom.onmouseout = function() {
		unflatten();
	};
	left.onmouseout = function() {
		unflatten();
	};
	right.onmouseout = function() {
		unflatten();
	};
	front.onmouseout = function() {
		unflatten();
	};
	back.onmouseout = function() {
		unflatten();
	};
};
