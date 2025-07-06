import React from 'react';
import {updateSellTypes} from "../../../lib/actions";
import CheckboxTemplate from "./CheckboxTemplate";
import {connect} from "react-redux";
import {checkCheckedValues} from "../../../lib/Functions";
import {accessSellType} from "../../../lib/ReduceAccessor";

export const card = "Čipová karta";
export const coupon = "Papierový kupón";
export const eshop = "EShop";

export const sellTypeValues = [card, coupon, eshop];

const CheckboxSellType = ({sellType}) => {

	const sellTypesOptions = [
		{itemName: card, isChecked: true},
		{itemName: coupon, isChecked: true},
		{itemName: eshop, isChecked: true}
	];

	const filterHeader = "Filter podľa typu predaja";
	const checkItemsFunc = checkCheckedValues(sellTypesOptions, sellType)

	return <CheckboxTemplate checkItems={checkItemsFunc} dispatchFunction={updateSellTypes} filterHeader={filterHeader}/>
};

const mapStateToProps = state => ({
	sellType: accessSellType(state)
});

export default connect(mapStateToProps)(CheckboxSellType);