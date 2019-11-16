export const actions = (personArray) => {
	return {
		type: 'UPDATE_PERSON',
		payload: personArray
	}
};

export const updateSellTypes = (sellTypeArray) => {
	return {
		type: 'UPDATE_SELL_TYPE',
		payload: sellTypeArray
	}
};

export const updateMonths = (months) => {
	return {
		type: 'UPDATE_MONTHS',
		payload: months
	}
};

export const updateValidity = (validities) => {
	return {
		type: 'UPDATE_VALIDITY',
		payload: validities
	}
};

export const updateColor = (color) => {
	return {
		type: 'UPDATE_COLOR',
		payload: color
	}
};
