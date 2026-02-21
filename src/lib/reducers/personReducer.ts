import { defaultPersonRequestParams } from '../../components/controlls/checkboxes/CheckboxPerson';
import { Action } from '../../types';

const personReducer = (state: string = defaultPersonRequestParams, action: Action): string => {
  if (action.type === 'UPDATE_PERSON') {
    return action.payload;
  }
  return state;
};

export default personReducer;
