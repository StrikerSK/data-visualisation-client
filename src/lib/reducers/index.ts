import { combineReducers } from 'redux';
import personReducer from './personReducer';
import sellTypeReducer from './sellTypeReducer';
import validityReducer from './validityReducer';
import generalReducer from './generalReducer';
import { RootState } from '../../types';

const allReducers = combineReducers<RootState>({
  personReducer,
  sellTypeReducer,
  validityReducer,
  generalReducer,
});

export default allReducers;
