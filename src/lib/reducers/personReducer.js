import {personValues} from "../../components/controlls/checkboxes/CheckboxPerson";

const personReducer = (persons = {}, action) => {
	if(action.type === 'UPDATE_PERSON') {
		persons = action.payload;
		return persons;
	}
	persons = personValues;
	return persons;
};
export default personReducer;

