const assert = require("assert");
const Dice = require("../src/models/dice.js");

describe("Dice", function(){
	describe("roll()", function(){
		it("Should return a number over 0 and less than 7", function(){
			const dice = new Dice(6);
			assert(dice.roll() < 7);
			assert(dice.roll() > 0);
		});
	});
});