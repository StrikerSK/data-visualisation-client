import {combineReducers} from "redux";
import personReducer from "./personReducer";
import sellTypeReducer from "./sellTypeReducer";
import colorReducer from "./colorReducer";
import validityReducer from "./validityReducer";
import generalReducer from "./generalReducer";

const allReducers = combineReducers({
	personReducer,
	sellTypeReducer,
	colorReducer,
	validityReducer,
	generalReducer
});
export default allReducers;
