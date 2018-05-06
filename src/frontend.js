app.use(favicon(path.join(__dirname, 'compiled', 'favicon.ico')));

function displayNumber(number) {
	const placeholder = document.getElementById("placeholder");
	placeholder.innerHTML = number;
}

const dice = new Dice(6);
const button = document.getElementById("button");

button.onclick = function() {
	const result = dice.roll();
	displayNumber(result);
};
