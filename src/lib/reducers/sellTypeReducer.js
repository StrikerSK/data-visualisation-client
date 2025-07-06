import {sellTypeValues} from "../../components/controlls/checkboxes/CheckboxSellType";

const sellTypeReducer = (sellTypes = {}, action) => {
	if(action.type === 'UPDATE_SELL_TYPE') {
		sellTypes = action.payload;
		return sellTypes;
	}
	sellTypes = sellTypeValues;
	return sellTypes;
};
export default sellTypeReducer;
