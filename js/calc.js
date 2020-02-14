/* -------------------------

        Calculator ...

---------------------------*/
var result = document.getElementById('result');
var cal = false;
var val_1 = false;
var val_2 = false;
var oper = '+';
var tot = 0;
var cal_done = false;

function num(val) {
	// clearing if previous data available
	if (cal_done) {
		result.innerHTML = '';
		cal = false;
		val_1 = false;
		val_2 = false;
		oper = '+';
		tot = 0;
		cal_done = false;
		result.innerHTML = val.value;
	}

	// checking if /,*,+,- clicked
	if (!cal) {
		// if 0, remove it
		if (result.innerHTML.charAt(0) == 0)
			result.innerHTML = result.innerHTML.slice(1);

		// puts numbers together and stores in val_1 (before /,*,+,- clicked)
		result.innerHTML = result.innerHTML + val.innerHTML;
		val_1 = result.innerHTML;
	} else {
		// if 0, remove it
		if (result.innerHTML.charAt(0) == 0)
			result.innerHTML = result.innerHTML.slice(1);

		if (
			result.innerHTML == '/' ||
			result.innerHTML == '*' ||
			result.innerHTML == '+' ||
			result.innerHTML == '-'
		)
			result.innerHTML = '';

		// puts numbers together and stores in val_2 (after /,*,+,- clicked)
		result.innerHTML = result.innerHTML + val.innerHTML;
		val_2 = result.innerHTML;
	}
}

// when /,*,+,- is clicked
function calc(val) {
	// if no first value
	if (!val_1) {
		alert('select any number 1st');
	}

	// if first value is set
	if (val_1) {
		if (!val_2) {
			result.innerHTML = val.innerHTML;
			cal = true;
		}
		oper = val.innerHTML;
	}

	// if tries to add 3rd value...
	if (val_2) alert('Ary Bhai Bhai Bhai...');
}
function total() {
	if (!val_1) alert('Kia chah rhy?');

	if (!val_2) alert('Akhrot...');

	// if both values are set and ready to be calculated...
	if (val_1 && val_2) {
		switch (oper) {
			case '+':
				tot = +val_1 + +val_2;
				result.innerHTML = tot;
				cal_done = true;
				break;
			case '-':
				tot = +val_1 - +val_2;
				result.innerHTML = tot;
				cal_done = true;
				break;
			case '/':
				tot = +val_1 / +val_2;
				result.innerHTML = tot;
				cal_done = true;
				break;
			case '*':
				tot = +val_1 * +val_2;
				result.innerHTML = tot;
				cal_done = true;
				break;
			default:
				alert('Kuch toh garbar h Daya!');
		}
	}
}

// clearing everything...
function cls() {
	result.innerHTML = 0;
	cal = false;
	val_1 = false;
	val_2 = false;
	oper = '+';
	tot = 0;
	cal_done = false;
}
