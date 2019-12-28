export const generateColor = () => {
	const letters = "0123456789ABCDEF";
	let returnColor = "#";
	for (let i = 0; i < 6; i++) {
		returnColor += letters[Math.floor(Math.random() * 16)];
	}
	return returnColor;
};

export const generateColorArray = (colorNumber) => {
	const colorArray = [];
	for (let i = 0; i <= colorNumber; i++) {
		colorArray.push(generateColor());
	}
	return colorArray;
};

export const getLabels = (inputObject) => {
	const obj = inputObject[0];
	Object.keys(obj).forEach((property) => {
		if (obj[property] === 0 || property === "month") {
			delete obj[property]
		}
	});
	return Object.keys(obj);
};