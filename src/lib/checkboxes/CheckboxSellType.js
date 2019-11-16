import React, {useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {useDispatch} from "react-redux";
import {updateSellTypes} from "../actions";

export const card = "Čipová karta";
export const coupon = "Papierový kupón";

export const defaultSellTypeRequestParams = "type=Čipová%20karta&type=Papierový%20kupón";

const CheckboxSellType = ({dataSetter}) => {
	const dispatch = useDispatch();
	const [sellTypeFilter, setSellTypeFilter] = useState({
		coupon: true,
		card: true
	});

	const setRequestedPersons = (inputObject) => {
		const outputArray = [];

		if (inputObject.coupon) {
			addWithPrefix(coupon.replace(' ', '%20'));
		}

		if (inputObject.card) {
			addWithPrefix(card.replace(' ', '%20'));
		}

		dataSetter(outputArray.join("&"));
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
				</FormGroup>
			</FormControl>
		</div>
	);
};
export default CheckboxSellType;