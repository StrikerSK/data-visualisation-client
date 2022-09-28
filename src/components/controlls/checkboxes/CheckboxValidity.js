import React from "react";
import {connect} from "react-redux";
import {updateValidity} from "../../../lib/actions";
import CheckboxTemplate from "./CheckboxTemplate";
import {accessValidity} from "../../../lib/ReduceAccessor";
import {validateComponentChecks} from "../../../lib/Functions";

const three_month = "3 Mesačná";
const month = "Mesačná";
const five_month = "5 Mesačná";
const yearly = "Ročná";

export const defaultValidityRequestParams = "validity=Mesačná&validity=3%20Mesačná&validity=5%20Mesačná&validity=Ročná";

const CheckboxValidity = ({validity}) => {

	const validities = [
		{itemName: month, isChecked: true},
		{itemName: three_month, isChecked: true},
		{itemName: five_month, isChecked: true},
		{itemName: yearly, isChecked: true}
	];

	const filterHeader = "Filter podľa dĺžky platnosti";

	return <CheckboxTemplate checkItems={validateComponentChecks(validities, validity)} dispatchFunction={updateValidity} context={"validity"} filterHeader={filterHeader}/>

};

const mapStateToProps = state => ({
	validity: accessValidity(state)
});

export default connect(mapStateToProps)(CheckboxValidity);