/* -------------------------

           Todo ...

---------------------------*/
var newTodo = document.getElementById('new-todo');
var newTodoTime = document.getElementById('new-todo-time');
var err = document.getElementById('err');
var tasks = document.getElementById('tasks');
var addBox = document.getElementById('add-box');
var addBoxCover = document.getElementById('add-box-cover');
var toDos = [];
var para;
var label;
var checkBox;
var textSpan;
var timeSpan;

var d = new Date();
days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];
$('#day').html(days[d.getDay()] + ',');

var date = d.getDate();
function nth(d) {
	if (d > 3 && d < 21) return 'th';
	switch (d % 10) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
}
$('#date').html(date + nth(date));

month = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
$('#month').html(month[d.getMonth()]);

$('#tasksTotalN').html(toDos.length);

function testy() {
	$('#add-box-cover').fadeOut(500);
	$('#add-box').fadeOut(500);
}

// creating p and other elements
function createPara() {
	para = document.createElement('p');

	label = document.createElement('label');
	label.setAttribute('class', 'container');

	checkBox = document.createElement('input');
	checkBox.setAttribute('type', 'checkbox');
	checkBox.setAttribute('onchange', 'done(this);');

	checkBoxSpan = document.createElement('span');
	checkBoxSpan.setAttribute('class', 'checkmark');

	textSpan = document.createElement('span');
	textSpan.setAttribute('class', 'text');

	timeSpan = document.createElement('span');
	timeSpan.setAttribute('class', 'time');

	label.appendChild(checkBox);
	label.appendChild(checkBoxSpan);

	para.appendChild(label);
	para.appendChild(textSpan);
	para.appendChild(timeSpan);

	return para;
}

function addTodo() {
	if (newTodo.value == '' || newTodoTime.value == '') {
		err.innerHTML = 'Please Fix Errors';

		if (newTodo.value == '') newTodo.style.borderBottomColor = 'red';

		if (newTodoTime.value == '') newTodoTime.style.borderBottomColor = 'red';
	} else if (toDos.includes(newTodo.value)) {
		err.innerHTML = 'This task already exists!';
	} else {
		toDos.push(newTodo.value);

		createPara();

		var t = document.createTextNode(newTodo.value);
		tTime = document.createTextNode(newTodoTime.value);

		textSpan.appendChild(t);
		timeSpan.appendChild(tTime);

		oldPara = tasks.firstChild;
		tasks.insertBefore(para, oldPara);

		newTodo.value = '';
		newTodoTime.value = '';

		document.getElementById('tasksTotalN').innerHTML = toDos.length;

		setTimeout(function() {
			$('#add-box').fadeOut(500);
			$('#add-box-cover').fadeOut(500);
		}, 300);
	}
}

function done(a) {
	var targetP = $(a)
		.parent()
		.parent(); // targetting whole paragraph

	if (targetP.hasClass('done')) {
		targetP.removeClass('done');
	} else {
		targetP.addClass('done');
	}
}

function clrChecked() {
	while ($('#tasks p').hasClass('done')) {
		var a = $('#tasks p.done')[0];
		var text = a.getElementsByClassName('text')[0].innerHTML;
		var index = toDos.indexOf(text);
		if (index > -1) {
			toDos.splice(index, 1);
		}
		document.getElementById('tasksTotalN').innerHTML = toDos.length;
		a.remove();
	}
}
