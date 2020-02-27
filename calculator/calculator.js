function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (a) {
	let res = 0;
	for (let i of a){	
		res += i;
	}
	return res;
}

function multiply (a) {
	let res = 1;
	for (let i of a){	
		res *= i;
	}
	return res;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	res = 1;
	for (let i = a; i > 0; i--){
		res *= i;

	}
	return res;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}