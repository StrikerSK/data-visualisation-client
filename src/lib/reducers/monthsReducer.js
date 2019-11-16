import {defaultMonthRequestParams} from "../checkboxes/CheckboxMonths";

const monthsReducer = (months = {}, action) => {
	if(action.type === 'UPDATE_MONTHS') {
		months = action.payload;
		return months;
	}
	months = defaultMonthRequestParams;
	return months;
};
export default monthsReducer;
