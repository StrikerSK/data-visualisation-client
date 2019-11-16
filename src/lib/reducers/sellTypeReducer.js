import {defaultSellTypeRequestParams} from "../checkboxes/CheckboxSellType";

const sellTypeReducer = (sellTypes = {}, action) => {
	if(action.type === 'UPDATE_SELL_TYPE') {
		sellTypes = action.payload;
		return sellTypes;
	}
	sellTypes = defaultSellTypeRequestParams;
	return sellTypes;
};
export default sellTypeReducer;
