import React from "react";
import CheckboxTemplate from "./CheckboxTemplate";
import {updatePersons} from "../../lib/actions";
import {connect} from "react-redux";
import {validateComponentChecks} from "../../lib/Functions";

export const adults = "Dospelý";
export const juniors = "Juniori";
export const seniors = "Dôchodcovia";
export const students = "Študenti";
export const portable = "Prenosná";
export const portableData = "Prenosné";
export const children = "Deti";

export const dataKeys = [adults, seniors, juniors, students, portableData, children];
export const defaultPersonRequestParams = "person=Dospelý&person=Dôchodcovia&person=Študenti&person=Prenosná&person=Juniori&person=Deti";

const CheckboxPerson = ({person}) => {

	const persons = [
		{itemName: adults, isChecked: true},
		{itemName: juniors, isChecked: true},
		{itemName: seniors, isChecked: true},
		{itemName: students, isChecked: true},
		{itemName: portable, isChecked: true},
		{itemName: children, isChecked: true},
	];

	const filterHeader = "Filter podľa typu osoby";

	return <CheckboxTemplate checkItems={validateComponentChecks(persons, person)} dispatchFunction={updatePersons} context={"person"} filterHeader={filterHeader}/>
};

const mapStateToProps = state => ({
	person: state.generalReducer.person,
});

export default connect(mapStateToProps)(CheckboxPerson);