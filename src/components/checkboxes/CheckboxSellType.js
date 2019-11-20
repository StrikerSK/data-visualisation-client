import React, {useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {useDispatch} from "react-redux";
import {updateSellTypes} from "../../lib/actions";

export const card = "Čipová karta";
export const coupon = "Papierový kupón";
export const eshop = "EShop";

export const defaultSellTypeRequestParams = "type=Čipová%20karta&type=Papierový%20kupón&type=EShop";

const CheckboxSellType = () => {
	const dispatch = useDispatch();
	const [sellTypeFilter, setSellTypeFilter] = useState({
		coupon: true,
		card: true,
		eshop: true
	});

	const setRequestedPersons = (inputObject) => {
		const outputArray = [];

		if (inputObject.coupon) {
			addWithPrefix(coupon.replace(' ', '%20'));
		}

		if (inputObject.card) {
			addWithPrefix(card.replace(' ', '%20'));
		}

		if (inputObject.eshop) {
			addWithPrefix(eshop);
		}

		dispatch(updateSellTypes(outputArray.join("&")));

		function addWithPrefix(sellType) {
			outputArray.push("type=" + sellType);
		}
	};

	const checkboxHandler = ({target}) => {
		const {name} = target;
		const inputFilter = {...sellTypeFilter, [name]: target.checked};

		setSellTypeFilter(inputFilter);
		setRequestedPersons(inputFilter);
	};

	return (
		<div>
			<FormControl component={"fieldset"}>
				<FormLabel component="legend">Filter podľa platnosti</FormLabel>
				<FormGroup row>
					<FormControlLabel
						control={
							<Checkbox name={"coupon"}
							          checked={sellTypeFilter.coupon}
							          onChange={(event) => checkboxHandler(event)}/>
						}
						label={coupon}
					/>
					<FormControlLabel
						control={
							<Checkbox name={"card"}
							          checked={sellTypeFilter.card}
							          onChange={(event) => checkboxHandler(event)}/>
						}
						label={card}
					/>
					<FormControlLabel
						control={
							<Checkbox name={"eshop"}
							          checked={sellTypeFilter.eshop}
							          onChange={(event) => checkboxHandler(event)}/>
						}
						label={eshop}
					/>
				</FormGroup>
			</FormControl>
		</div>
	);
};
export default CheckboxSellType;