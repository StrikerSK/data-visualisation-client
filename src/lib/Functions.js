export const generateColor = () => {
  const letters = '0123456789ABCDEF';
  let returnColor = '#';
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
export const getLabels = (input) => {
  if (!Array.isArray(input) || input.length === 0) return [];
  return Object.keys(input[0])
    .filter((key) => key !== 'label')
    .reverse();
};

//Validates if current verifiedArray is checked
export const validateComponentChecks = (verifiedArray, inputArray) => {
  if (inputArray.length > 0) {
    const storedMonths = inputArray
      .split('&')
      .map((item) => item.split('=')[1].replace('%20', ' '));
    return verifiedArray.map((item) => {
      if (storedMonths.includes(item.itemName)) {
        return item;
      } else {
        return { ...item, isChecked: false };
      }
    });
  } else {
    return verifiedArray;
  }
};

const desktopThreshold = 770;

export const adaptToWidth = (desktopValue, responsiveValue) => {
  if (window.innerWidth > desktopThreshold) {
    return desktopValue;
  } else {
    return responsiveValue;
  }
};

export const isDesktop = () => {
  return window.innerWidth > desktopThreshold;
};
