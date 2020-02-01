export const accessSellType = (state) => {
	return state.generalReducer.sellType;
};

export const accessMonths = (state) => {
	return state.generalReducer.months;
};

export const accessPersons = (state) => {
	return state.generalReducer.person;
};

export const accessValidity = (state) => {
	return state.generalReducer.validity;
};

export const accessAll = (state) => {
	return {
		months: state.generalReducer.months,
		person: state.generalReducer.person,
		validity: state.generalReducer.validity,
		sellType: state.generalReducer.sellType,
		color: state.generalReducer.color,
		barGrouping: state.generalReducer.barGroupingValue,
		barLayout: state.generalReducer.barLayoutValue
	}
};