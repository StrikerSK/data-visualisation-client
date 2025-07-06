import React from "react";
import {connect} from "react-redux";
import {updateValidity} from "../../../lib/actions";
import CheckboxTemplate from "./CheckboxTemplate";
import {accessValidity} from "../../../lib/ReduceAccessor";
import {validateComponentChecksImproved} from "../../../lib/Functions";

const three_month = "3 Mesačná";
const month = "Mesačná";
const five_month = "5 Mesačná";
const yearly = "Ročná";

export const validityValues = [month, three_month, five_month, yearly];

const CheckboxValidity = ({validity}) => {

	const validities = [
		{itemName: month, isChecked: true},
		{itemName: three_month, isChecked: true},
		{itemName: five_month, isChecked: true},
		{itemName: yearly, isChecked: true}
	];

	const filterHeader = "Filter podľa dĺžky platnosti";
	const checkItemsFunc = validateComponentChecksImproved(validities, validity)

	return <CheckboxTemplate checkItems={checkItemsFunc} dispatchFunction={updateValidity} filterHeader={filterHeader}/>

};

const mapStateToProps = state => ({
	validity: accessValidity(state)
});

export default connect(mapStateToProps)(CheckboxValidity);