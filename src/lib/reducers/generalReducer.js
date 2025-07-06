import {monthArray} from "../../components/controlls/checkboxes/CheckboxMonths";
import {personValues} from "../../components/controlls/checkboxes/CheckboxPerson";
import {sellTypeValues} from "../../components/controlls/checkboxes/CheckboxSellType";
import {validityValues} from "../../components/controlls/checkboxes/CheckboxValidity";
import {defaultBarOrder} from "../../components/BarGeneratorButton";

const defaultLayoutValue = "vertical";
const defaultGroupingValue = "stacked";
const defaultColorName = "nivo";

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

	data.months = monthArray;
	data.person = personValues;
	data.sellType = sellTypeValues;
	data.validity = validityValues;
	data.color = defaultColorName;
	data.barLayoutValue = defaultLayoutValue;
	data.barGroupingValue = defaultGroupingValue;
	data.barDataKeys = defaultBarOrder;

	return data;
};
export default generalReducer;
