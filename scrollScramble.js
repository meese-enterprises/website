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

/**
 * Modified from https://codepen.io/blazicke/pen/dQjxMr
 */
const stringRandom = (function () {
	const data = {
		isScrolling: false,
		repeat: 0,
		target: [],
		letters: "*+-/@_$[%£!XO1&>",
		originalStrings: [],
		singleLetters: [],
	};

	function checkLength(x) {
		return Array.from(document.querySelectorAll(x)).length > 0;
	}

	function changeLetter(letter) {
		if (letter.textContent != " ") {
			letter.classList.add("is-changing");
			letter.style.animationDuration = Math.random().toFixed(2) + "s";

			const newChar = data.letters.substr(
				Math.random() * data.letters.length,
				1
			);
			letter.textContent = newChar;
			letter.setAttribute("data-txt", newChar);
		}
	}

	function resetLetter(letter) {
		const originalValue = letter.getAttribute("data-original");
		letter.classList.remove("is-changing");
		letter.textContent = originalValue;
		letter.setAttribute("data-txt", originalValue);
	}

	function divideLetters() {
		data.targets.forEach((element, index) => {
			const text = element.textContent;
			let textDivided = "";

			data.originalStrings[index] = text;

			for (let i = 0; i < text.length; i++) {
				textDivided += `<span class="scrambling scrollScramble-${index}-span-${i}" data-txt="${text.charAt(
					i
				)}" data-original="${text.charAt(i)}">${text.charAt(i)}</span>`;
			}

			element.innerHTML = textDivided;
		});

		data.singleLetters = document.querySelectorAll(".scrambling");
	}

	// changes letters
	function changeLetters() {
		if (data.isScrolling) {
			data.singleLetters.forEach(function (el, index) {
				changeLetter(el);
			});
		}

		setTimeout(changeLetters, 10);
	}

	/** Reset to initial letters */
	function resetLetters() {
		const randomArray = [];
		for (let i = 0; i < data.singleLetters.length; i++) {
			randomArray.push(i);
		}

		randomArray.shuffle();
		randomArray.forEach(function (el, index) {
			setTimeout(function () {
				resetLetter(data.singleLetters[el]);
			}, index * 20 * (Math.random() * 5)).toFixed(2);
		});
	}

	function updateScrollState() {
		data.isScrolling = true;

		setTimeout(function () {
			data.isScrolling = false;
			resetLetters();
			clearTimeout(this);
		}, 300);
	}

	return {
		init: function (selector) {
			if (checkLength(selector)) {
				data.targets = Array.from(document.querySelectorAll(selector));
				divideLetters();
				changeLetters();

				// `wheel` instead of `scroll` for when the page is only a splash, not
				// more than 100% of the viewer height
				window.addEventListener("wheel", updateScrollState);
			}
		},
	};
})();

stringRandom.init(".scrollScramble");
