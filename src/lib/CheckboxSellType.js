import React, {useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export const card = "Čipová karta";
export const coupon = "Papierový kupón";

export const defaultSellTypeRequestParams = "type=Čipová%20karta&type=Papierový%20kupón";

const CheckboxSellType = ({dataSetter}) => {
	const [sellTypeFilter, setSellTypeFilter] = useState({
		coupon: true,
		card: true
	});

	const checkboxHandler = ({target}) => {
		const {name} = target;
		const inputFilter = {...sellTypeFilter, [name]: target.checked};

		setSellTypeFilter(inputFilter);
		setRequestedPersons(inputFilter);
	};

	const setRequestedPersons = (inputObject) => {
		const outputArray = [];
		const prefix = "type=";

		if (inputObject.coupon) {
			outputArray.push(prefix + coupon.replace(' ', '%20'));
		}

		if (inputObject.card) {
			outputArray.push(prefix + card.replace(' ', '%20'));
		}

		console.log(outputArray.join("&"));
		dataSetter(outputArray.join("&"));
	};

	return (
		<div>
			<FormControl component={"fieldset"}>
				<FormLabel component="legend">Filter podľa platnosti</FormLabel>
				<FormGroup row>
					<FormControlLabel
						control={<Checkbox name={"coupon"} checked={sellTypeFilter.coupon}
						                   onChange={event => checkboxHandler(event)}/>}
						label={coupon}
					/>
					<FormControlLabel
						control={<Checkbox name={"card"} checked={sellTypeFilter.card}
						                   onChange={event => checkboxHandler(event)}/>}
						label={card}
					/>
				</FormGroup>
			</FormControl>
		</div>
	)
};
export default CheckboxSellType;