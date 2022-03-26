/**
 * Rearranges the indices of an array and returns the new array.
 * @returns {Array}
 */
Array.prototype.shuffle = function () {
	const input = this;

	for (let i = input.length - 1; i >= 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1));
		const itemAtIndex = input[randomIndex];

		input[randomIndex] = input[i];
		input[i] = itemAtIndex;
	}

	return input;
};

/** Gets a random integer between the two specified values. */
const getRandomInt = (min = 0, max = 1) =>
	Math.floor(Math.random() * (max - min)) + min;

/**
 * Modified from https://codepen.io/blazicke/pen/dQjxMr
 */
export default class ScrambleLetters {
	constructor(selector = ".scramble") {
		this.selector = selector;
		this.isScrambling = false;
		this.repeat = 0;
		this.target = [];
		this.letters = "*+-/@_$[%£!XO1&>";
		this.originalStrings = [];
		this.singleLetters = [];
		this.initialDelay = getRandomInt(400, 750);
		this.durationInterval = () => getRandomInt(250, 450);
		this.animationInterval = () => getRandomInt(8500, 14500);

		this.init();
	}

	init() {
		if (!this.checkLength(this.selector)) return;

		this.targets = Array.from(document.querySelectorAll(this.selector));
		this.divideLetters();

		// Run the scramble animation after the initial delay
		setTimeout(() => {
			this.startScramble();
		}, this.initialDelay);
	}

	startScramble() {
		this.changeLetters();
		this.isScrambling = true;

		// Stops the scramble animation after the duration interval
		setTimeout(() => {
			this.isScrambling = false;
			this.resetLetters();
			clearTimeout(this);

			// Repeat the scramble animation after the animation interval
			setTimeout(() => {
				this.startScramble();
			}, this.animationInterval());
		}, this.durationInterval());
	}

	checkLength(selector) {
		return Array.from(document.querySelectorAll(selector)).length > 0;
	}

	changeLetter(letter) {
		if (letter.textContent != " ") {
			letter.classList.add("is-changing");
			letter.style.animationDuration = Math.random().toFixed(2) + "s";

			const newChar = this.letters.substr(
				Math.random() * this.letters.length,
				1
			);
			letter.textContent = newChar;
			letter.setAttribute("data-txt", newChar);
		}
	}

	resetLetter(letter) {
		const originalValue = letter.getAttribute("data-original");
		letter.classList.remove("is-changing");
		letter.textContent = originalValue;
		letter.setAttribute("data-txt", originalValue);
	}

	divideLetters() {
		this.targets.forEach((element, index) => {
			const text = element.textContent;
			let textDivided = "";

			this.originalStrings[index] = text;

			for (let i = 0; i < text.length; i++) {
				textDivided += `<span class="scrambling scramble-${index}-span-${i}" data-txt="${text.charAt(
					i
				)}" data-original="${text.charAt(i)}">${text.charAt(i)}</span>`;
			}

			element.innerHTML = textDivided;
		});

		this.singleLetters = document.querySelectorAll(".scrambling");
	}

	changeLetters() {
		if (this.isScrambling) {
			this.singleLetters.forEach((el, index) => {
				this.changeLetter(el);
			});
		}

		setTimeout(this.changeLetters.bind(this), 10);
	}

	/** Reset to initial letters */
	resetLetters() {
		const randomArray = [];
		for (let i = 0; i < this.singleLetters.length; i++) {
			randomArray.push(i);
		}

		randomArray.shuffle();
		randomArray.forEach((el, index) => {
			setTimeout(() => {
				this.resetLetter(this.singleLetters[el]);
			}, index * 20 * (Math.random() * 5)).toFixed(2);
		});
	}
}
