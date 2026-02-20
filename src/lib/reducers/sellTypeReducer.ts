import { defaultSellTypeRequestParams } from '../../components/controlls/checkboxes/CheckboxSellType';
import { Action } from '../../types';

const sellTypeReducer = (state: string = defaultSellTypeRequestParams, action: Action): string => {
  if (action.type === 'UPDATE_SELL_TYPE') {
    return action.payload;
  }
  return state;
};

export default sellTypeReducer;
