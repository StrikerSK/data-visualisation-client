import {combineReducers} from "redux";
import personReducer from "./personReducer";
import sellTypeReducer from "./sellTypeReducer";
import monthsReducer from "./monthsReducer";
import validityReducer from "./validityReducer";
import generalReducer from "./generalReducer";

const allReducers = combineReducers({
	personReducer,
	sellTypeReducer,
	monthsReducer,
	validityReducer,
	generalReducer
});
export default allReducers;
