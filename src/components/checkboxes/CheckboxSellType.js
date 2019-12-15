import React from 'react';
import {updateSellTypes} from "../../lib/actions";
import CheckboxTemplate from "./CheckboxTemplate";

export const card = "Čipová karta";
export const coupon = "Papierový kupón";
export const eshop = "EShop";

export const defaultSellTypeRequestParams = "type=Čipová%20karta&type=Papierový%20kupón&type=EShop";

const CheckboxSellType = () => {

	const sellTypes = [
		{itemName: card, isChecked: true},
		{itemName: coupon, isChecked: true},
		{itemName: eshop, isChecked: true}
	];

	const filterHeader = "Filter podľa typu predaja";

	return <CheckboxTemplate checkItems={sellTypes} dispatchFunction={updateSellTypes} context={"type"} filterHeader={filterHeader}/>
};
export default CheckboxSellType;