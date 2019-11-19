import {defaultSellTypeRequestParams} from "../../components/checkboxes/CheckboxSellType";

const validityReducer = (sellTypes = {}, action) => {
	if(action.type === 'UPDATE_VALIDITY') {
		sellTypes = action.payload;
		return sellTypes;
	}
	sellTypes = defaultSellTypeRequestParams;
	return sellTypes;
};
export default validityReducer;
