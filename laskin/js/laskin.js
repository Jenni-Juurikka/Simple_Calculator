function makeCalculation(character) {
	let calcElement = document.getElementById("calculation");
	calcElement.value += character;
}

function calculationResult() {
	let calcElement = document.getElementById("calculation").value;
	document.getElementById("calculation").value = eval(result);
}