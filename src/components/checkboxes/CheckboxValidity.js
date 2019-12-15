import React from "react";
import {updateValidity} from "../../lib/actions";
import CheckboxTemplate from "./CheckboxTemplate";

const three_month = "3 Mesačná";
const month = "Mesačná";
const five_month = "5 Mesačná";
const yearly = "Ročná";

export const defaultValidityRequestParams = "validity=Mesačná&validity=3%20Mesačná&validity=5%20Mesačná&validity=Ročná";

const CheckboxValidity = () => {

	const validities = [
		{itemName: month, isChecked: true},
		{itemName: three_month, isChecked: true},
		{itemName: five_month, isChecked: true},
		{itemName: yearly, isChecked: true}
	];

	const filterHeader = "Filter podľa dĺžky platnosti";

	return <CheckboxTemplate checkItems={validities} dispatchFunction={updateValidity} context={"validity"} filterHeader={filterHeader}/>

};
export default CheckboxValidity;