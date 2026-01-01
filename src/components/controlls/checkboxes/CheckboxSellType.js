import React from 'react';
import {updateSellTypes} from "../../../lib/actions";
import CheckboxTemplate from "./CheckboxTemplate";
import {connect} from "react-redux";
import {validateComponentChecks} from "../../../lib/Functions";
import {accessSellType} from "../../../lib/ReduceAccessor";

export const card = "Čipová karta";
export const coupon = "Papierový kupón";
export const eshop = "EShop";

export const defaultSellTypeRequestParams = "type=Čipová%20karta&type=Papierový%20kupón&type=EShop";

const CheckboxSellType = ({sellType}) => {

	const sellTypesOptions = [
		{itemName: card, isChecked: true},
		{itemName: coupon, isChecked: true},
		{itemName: eshop, isChecked: true}
	];

	const filterHeader = "Filter podľa typu predaja";

	return <CheckboxTemplate checkItems={validateComponentChecks(sellTypesOptions, sellType)} dispatchFunction={updateSellTypes} context={"type"} filterHeader={filterHeader}/>
};

const mapStateToProps = state => ({
	sellType: accessSellType(state)
});

export default connect(mapStateToProps)(CheckboxSellType);