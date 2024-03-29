import React from 'react';
import {updateMonths} from "../../lib/actions";
import CheckboxTemplate from "./CheckboxTemplate";
import {connect} from "react-redux";
import {validateComponentChecks} from "../../lib/Functions";

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
export const defaultMonthRequestParams = "month=Január&month=Február&month=Marec&month=Apríl&month=Máj&month=Jún&month=Júl&month=August&month=September&month=Október&month=November&month=December";

const CheckboxMonths = ({months}) => {

	const constMonths = [
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

	return <CheckboxTemplate checkItems={validateComponentChecks(constMonths, months)} dispatchFunction={updateMonths} context={"month"} filterHeader={filterHeader}/>
};

const mapStateToProps = state => ({
	months: state.generalReducer.months,
});

export default connect(mapStateToProps)(CheckboxMonths);