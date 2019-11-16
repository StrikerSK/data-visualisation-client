import {defaultColorName} from "../selects/ColorSchemeSelector";

const colorReducer = (color = {}, action) => {
	if(action.type === 'UPDATE_COLOR') {
		color = action.payload;
		return color;
	}
	color = defaultColorName;
	return color;
};
export default colorReducer;
