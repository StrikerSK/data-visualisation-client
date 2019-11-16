import {defaultPersonRequestParams} from "../checkboxes/CheckboxPerson";

const personReducer = (persons = {}, action) => {
	if(action.type === 'UPDATE_PERSON') {
		persons = action.payload;
		return persons;
	}
	persons = defaultPersonRequestParams;
	return persons;
};
export default personReducer;

