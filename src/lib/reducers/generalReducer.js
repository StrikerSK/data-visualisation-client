import {defaultMonthRequestParams} from "../checkboxes/CheckboxMonths";
import {defaultPersonRequestParams} from "../checkboxes/CheckboxPerson";
import {defaultSellTypeRequestParams} from "../checkboxes/CheckboxSellType";
import {defaultValidityRequestParams} from "../checkboxes/CheckboxValidity";

const generalReducer = (data = {}, action) => {
	if(action.type === 'UPDATE_MONTHS') {
		data.months = action.payload;
		return data;
	}

	if(action.type === 'UPDATE_PERSON') {
		data.person = action.payload;
		return data;
	}


	if(action.type === 'UPDATE_SELL_TYPE') {
		data.sellType = action.payload;
		return data;
	}

	if(action.type === 'UPDATE_VALIDITY') {
		data.validity = action.payload;
		return data;
	}

	if(action.type === 'UPDATE_COLOR') {
		data.color = action.payload;
		return data;
	}

	data.months = defaultMonthRequestParams;
	data.person = defaultPersonRequestParams;
	data.sellType = defaultSellTypeRequestParams;
	data.validity = defaultValidityRequestParams;
	data.color = "nivo";

	return data;
};
export default generalReducer;
