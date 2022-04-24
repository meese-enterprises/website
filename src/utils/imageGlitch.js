/* Modified from https://codepen.io/samdbeckham/pen/XBzQeK */

export function VHSify(image) {
	if (
		!CSS.supports("mix-blend-mode", "screen") ||
		!CSS.supports("filter", "url()")
	) {
		return;
	}

	const container = document.createElement("div");
	const images = RGBImages(image);

	images.forEach((image) => container.appendChild(image));
	container.classList.add("vhs-filter");
	image.replaceWith(container);
}

function RGBImages(image) {
	const colors = ["r", "g", "b"];
	const images = colors.map((color) => {
		const img = image.cloneNode();
		img.classList.add(`vhs-filter__${color}`);
		return img;
	});

	return images;
}
