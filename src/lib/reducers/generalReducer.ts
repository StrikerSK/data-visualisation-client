import { defaultMonthRequestParams } from '../../components/controlls/checkboxes/CheckboxMonths';
import { defaultPersonRequestParams } from '../../components/controlls/checkboxes/CheckboxPerson';
import { defaultSellTypeRequestParams } from '../../components/controlls/checkboxes/CheckboxSellType';
import { defaultValidityRequestParams } from '../../components/controlls/checkboxes/CheckboxValidity';
import { defaultBarOrder } from '../../components/BarGeneratorButton';
import { GeneralState, Action } from '../../types';

const initialState: GeneralState = {
  months: defaultMonthRequestParams,
  person: defaultPersonRequestParams,
  sellType: defaultSellTypeRequestParams,
  validity: defaultValidityRequestParams,
  color: 'nivo',
  barLayoutValue: 'vertical',
  barGroupingValue: 'stacked',
  barDataKeys: defaultBarOrder,
};

const generalReducer = (state = initialState, action: Action): GeneralState => {
  switch (action.type) {
    case 'UPDATE_MONTHS':
      return { ...state, months: action.payload };
    case 'UPDATE_PERSON':
      return { ...state, person: action.payload };
    case 'UPDATE_SELL_TYPE':
      return { ...state, sellType: action.payload };
    case 'UPDATE_VALIDITY':
      return { ...state, validity: action.payload };
    case 'UPDATE_COLOR':
      return { ...state, color: action.payload };
    case 'UPDATE_BAR_LAYOUT':
      return { ...state, barLayoutValue: action.payload };
    case 'UPDATE_BAR_GROUPING':
      return { ...state, barGroupingValue: action.payload };
    case 'UPDATE_BAR_DATA_KEYS':
      return { ...state, barDataKeys: action.payload };
    default:
      return state;
  }
};

export default generalReducer;
