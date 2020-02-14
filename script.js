// Hiding Starting Windows When Page Loads and Setting Session "NAME" and "WALLPAPER" ...
$(window).on('load', function() {
	// $('.ring').css('visibility', 'visible');
	// $('.ring').delay(1000).fadeOut(500);
	// $('#starting-win img').delay(1000).fadeOut(1000);
	// $('#starting-win').delay(2000).fadeOut(1000);
	// $('#main').css("background-image", "url(img/wallpapers/1.jpg)");

	$('.ring').css('visibility', 'visible');
	$('.ring').fadeOut();
	$('#starting-win img').fadeOut();
	$('#starting-win').fadeOut();
	$('#main').css('background-image', 'url(img/wallpapers/1.jpg)');

	if (
		localStorage.getItem('name') == null ||
		localStorage.getItem('name') == '' ||
		localStorage.getItem('name') == 'undefined'
	) {
		// Asking Name
		name = prompt('Your Name Please') || 'Buddy';

		// Check browser support of LocalStorage
		if (typeof Storage !== 'undefined') {
			// Store name
			localStorage.setItem('name', name);
			// Retrieve name
			document.getElementById('name').innerHTML = localStorage.getItem('name');
		} else {
			document.getElementById('name').innerHTML = 'This PC';
		}
	} else {
		document.getElementById('name').innerHTML = localStorage.getItem('name');
		$('#main').css(
			'background-image',
			'url(img/wallpapers/' + localStorage.getItem('wp') + '.jpg)'
		);
	}
});

// When outside of any icon clicked deselct icon ...
var mouse_is_inside = true;
$(document).ready(function() {
	$('body').mouseup(function() {
		if (!mouse_is_inside)
			$('.desktop-item').css('background-color', 'transparent');
		hovered = false;
		selected = false;
	});
});

// When icon is selected ...
var selected;
function selectedItem(a) {
	a.style.background = 'rgba(255, 255, 255, .4)';
	mouse_is_inside = false;
	selected = true;
}

// When icon is hovered ...
var hovered;
function hoveredItem(a) {
	if (!selected) {
		a.style.background = 'rgba(255, 255, 255, .2)';
	}
	mouse_is_inside = false;
	hovered = true;
}

// When icon is hovered out ...
function hoveredOut(a) {
	if (hovered && !selected) {
		a.style.background = 'rgba(255, 255, 255, 0)';
		mouse_is_inside = false;
		hovered = false;
	}
}

// Making the TAB draggagle...
dragElement(
	document.getElementById('tab'),
	document.getElementById('tab-header')
);
dragElement(
	document.getElementById('tab-calc'),
	document.getElementById('tab-calc-header')
);
dragElement(
	document.getElementById('tab-todo'),
	document.getElementById('tab-todo-header')
);

function dragElement(elmnt, eH) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	eH.onmousedown = dragMouseDown;

	function dragMouseDown(e) {
		e = e || window.event;
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
		elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

// Clock ...
setTimeout(function() {
	setInterval(function() {
		var hours = new Date().getHours();
		var merid;
		if (hours > 12) {
			hours = hours - 12;
			merid = 'PM';
		} else {
			merid = 'AM';
		}

		var minutes = new Date().getMinutes();
		// Add a leading zero to the minutes value
		minutes = (minutes < 10 ? '0' : '') + minutes;

		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!

		var yyyy = today.getFullYear();
		var today = mm + '/' + dd + '/' + yyyy;

		$('#clock').html(hours + ':' + minutes + ' ' + merid + '<br>' + today);
	}, 1000);
}, 1000);

var tab = document.getElementById('main');
var starting = document.getElementById('starting-win');

if (starting.addEventListener) {
	starting.addEventListener(
		'contextmenu',
		function(e) {
			e.preventDefault();
		},
		false
	);
}

if (tab.addEventListener) {
	tab.addEventListener(
		'contextmenu',
		function(e) {
			$('#body-rmenu').toggleClass('hide');
			$('#body-rmenu').css({
				position: 'absolute',
				top: e.pageY,
				left: e.pageX
			});
			//alert('Worked');
			e.preventDefault();
		},
		false
	);
}

// this is from another SO post...
$(document).bind('click', function(event) {
	document.getElementById('body-rmenu').className = 'hide';
});

function changeBg(number) {
	// Check browser support of LocalStorage
	if (typeof Storage !== 'undefined') {
		// Store
		localStorage.setItem('wp', number);
		$('#main').css(
			'background-image',
			'url(img/wallpapers/' + number + '.jpg)'
		);
	} else {
		$('#main').css(
			'background-image',
			'url(img/wallpapers/' + number + '.jpg)'
		);
	}
}
