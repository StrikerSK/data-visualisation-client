import {defaultMonthRequestParams} from "../checkboxes/CheckboxMonths";
import {defaultPersonRequestParams} from "../checkboxes/CheckboxPerson";
import {defaultSellTypeRequestParams} from "../checkboxes/CheckboxSellType";
import {defaultValidityRequestParams} from "../checkboxes/CheckboxValidity";
import {defaultColorName} from "../selects/ColorSchemeSelector";
import {defaultGroupingValue, defaultLayoutValue} from "../selects/LayoutSelect";
import {defaultBarOrder} from "../BarGeneratorButton";

const generalReducer = (data = {}, action) => {
	if(action.type === 'UPDATE_MONTHS') {
		data = {...data, months: action.payload};
		return data;
	}

	if(action.type === 'UPDATE_PERSON') {
		data = {...data, person: action.payload};
		return data;
	}


	if(action.type === 'UPDATE_SELL_TYPE') {
		data = {...data, sellType: action.payload};
		return data;
	}

	if(action.type === 'UPDATE_VALIDITY') {
		data = {...data, validity: action.payload};
		return data;
	}

	if(action.type === 'UPDATE_COLOR') {
		data = {...data, color: action.payload};
		return data;
	}

	if(action.type === 'UPDATE_BAR_LAYOUT') {
		data = {...data, barLayoutValue: action.payload};
		return data;
	}

	if(action.type === 'UPDATE_BAR_GROUPING') {
		data = {...data, barGroupingValue: action.payload};
		return data;
	}

	if(action.type === 'UPDATE_BAR_DATA_KEYS') {
		data = {...data, barDataKeys: action.payload};
		return data;
	}

	data.months = defaultMonthRequestParams;
	data.person = defaultPersonRequestParams;
	data.sellType = defaultSellTypeRequestParams;
	data.validity = defaultValidityRequestParams;
	data.color = defaultColorName;
	data.barLayoutValue = defaultLayoutValue;
	data.barGroupingValue = defaultGroupingValue;
	data.barDataKeys = defaultBarOrder;

	return data;
};
export default generalReducer;
