import React from "react";
import CheckboxTemplate from "./CheckboxTemplate";
import {updatePersons} from "../../lib/actions";

export const adults = "Dospelý";
export const juniors = "Juniori";
export const seniors = "Dôchodcovia";
export const students = "Študenti";
export const portable = "Prenosná";
export const portableData = "Prenosné";
export const children = "Deti";

export const dataKeys = [adults, seniors, juniors, students, portableData, children];
export const defaultPersonRequestParams = "person=Dospelý&person=Dôchodcovia&person=Študenti&person=Prenosná&person=Juniori&person=Deti";

const CheckboxPerson = () => {

	const persons = [
		{itemName: adults, isChecked: true},
		{itemName: juniors, isChecked: true},
		{itemName: seniors, isChecked: true},
		{itemName: students, isChecked: true},
		{itemName: portable, isChecked: true},
		{itemName: children, isChecked: true},
	];

	const filterHeader = "Filter podľa typy osoby";

	return <CheckboxTemplate checkItems={persons} dispatchFunction={updatePersons} context={"person"} filterHeader={filterHeader}/>
};
export default CheckboxPerson;