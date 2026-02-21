export const generateColor = (): string => {
  const letters = '0123456789ABCDEF';
  let returnColor = '#';
  for (let i = 0; i < 6; i++) {
    returnColor += letters[Math.floor(Math.random() * 16)];
  }
  return returnColor;
};

export const generateColorArray = (colorNumber: number): string[] => {
  const colorArray: string[] = [];
  for (let i = 0; i <= colorNumber; i++) {
    colorArray.push(generateColor());
  }
  return colorArray;
};

//Get labels for received data
export const getLabels = (input: any[]): string[] => {
  if (!Array.isArray(input) || input.length === 0) return [];
  return Object.keys(input[0])
    .filter((key) => key !== 'label')
    .reverse();
};

interface CheckItem {
  itemName: string;
  isChecked: boolean;
}

//Validates if current verifiedArray is checked
export const validateComponentChecks = (
  verifiedArray: CheckItem[],
  inputArray: string[]
): CheckItem[] => {
  if (Array.isArray(inputArray) && inputArray.length > 0) {
    return verifiedArray.map((item) => {
      if (inputArray.includes(item.itemName)) {
        return { ...item, isChecked: true };
      } else {
        return { ...item, isChecked: false };
      }
    });
  } else if (Array.isArray(inputArray) && inputArray.length === 0) {
    return verifiedArray.map((item) => ({ ...item, isChecked: false }));
  } else {
    return verifiedArray;
  }
};

const desktopThreshold = 770;

export const adaptToWidth = (desktopValue: any, responsiveValue: any): any => {
  if (window.innerWidth > desktopThreshold) {
    return desktopValue;
  } else {
    return responsiveValue;
  }
};

export const isDesktop = (): boolean => {
  return window.innerWidth > desktopThreshold;
};
