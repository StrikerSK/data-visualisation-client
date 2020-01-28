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

//Get labels for received data
export const getLabels = (inputObject) => {
	const obj = inputObject[0];
	Object.keys(obj).forEach((property) => {
		if (obj[property] === 0 || property === "month") {
			delete obj[property]
		}
	});
	return Object.keys(obj);
};

//Validates if current verifiedArray is checked
export const validateComponentChecks = (verifiedArray, inputArray) => {
	const storedMonths = inputArray.split("&").map(item => item.split("=")[1].replace("%20", " "));
	return verifiedArray.map(item => {
		if (storedMonths.includes(item.itemName)) {
			return item;
		} else {
			return {...item, isChecked: false}
		}
	});
};