import { defaultSellTypeRequestParams } from '../../components/controlls/checkboxes/CheckboxSellType';
import { Action } from '../../types';

const validityReducer = (state: string = defaultSellTypeRequestParams, action: Action): string => {
  if (action.type === 'UPDATE_VALIDITY') {
    return action.payload;
  }
  return state;
};

export default validityReducer;
