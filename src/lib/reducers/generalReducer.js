import {defaultMonthRequestParams} from "../../components/checkboxes/CheckboxMonths";
import {defaultPersonRequestParams} from "../../components/checkboxes/CheckboxPerson";
import {defaultSellTypeRequestParams} from "../../components/checkboxes/CheckboxSellType";
import {defaultValidityRequestParams} from "../../components/checkboxes/CheckboxValidity";
import {defaultColorName} from "../../components/selects/ColorSchemeSelector";
import {defaultGroupingValue, defaultLayoutValue} from "../../components/selects/LayoutSelect";
import {defaultBarOrder} from "../../components/BarGeneratorButton";

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
