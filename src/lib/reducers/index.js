import {combineReducers} from "redux";
import personReducer from "./personReducer";
import sellTypeReducer from "./sellTypeReducer";
import validityReducer from "./validityReducer";
import generalReducer from "./generalReducer";

const allReducers = combineReducers({
	personReducer,
	sellTypeReducer,
	validityReducer,
	generalReducer
});
export default allReducers;
