!function(root){
	"use strict";

	function Dice(sides) {
		this.sides = sides;
	}

	Dice.prototype.roll = function () {
		return Math.floor(Math.random() * this.sides) + 1;
	};

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Dice;
	} else {
		root.Dice = Dice;
	}

}(this);