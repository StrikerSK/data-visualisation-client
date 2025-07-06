import React from 'react';
import {updateMonths} from "../../../lib/actions";
import CheckboxTemplate from "./CheckboxTemplate";
import {connect} from "react-redux";
import {checkCheckedValues} from "../../../lib/Functions";

export const january = "Január";
export const february = "Február";
export const march = "Marec";
export const april = "Apríl";
export const may = "Máj";
export const june = "Jún";
export const july = "Júl";
export const august = "August";
export const september = "September";
export const october = "Október";
export const november = "November";
export const december = "December";

export const monthArray = [january, february, march, april, may, june, july, august, september, october, november, december];

const CheckboxMonths = ({months: selectedMonths}) => {

	const monthCheckboxes = [
		{itemName: january, isChecked: true},
		{itemName: february, isChecked: true},
		{itemName: march, isChecked: true},
		{itemName: april, isChecked: true},
		{itemName: may, isChecked: true},
		{itemName: june, isChecked: true},
		{itemName: july, isChecked: true},
		{itemName: august, isChecked: true},
		{itemName: september, isChecked: true},
		{itemName: october, isChecked: true},
		{itemName: november, isChecked: true},
		{itemName: december, isChecked: true}
	];

	const filterHeader = "Filter podľa mesiacov";
	const checkItemsFunc = checkCheckedValues(monthCheckboxes, selectedMonths)

	return <CheckboxTemplate checkItems={checkItemsFunc} dispatchFunction={updateMonths} filterHeader={filterHeader}/>
};

const mapStateToProps = state => ({
	months: state.generalReducer.months,
});

export default connect(mapStateToProps)(CheckboxMonths);