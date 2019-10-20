import React, {useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const three_month = "3 Mesačná";
export const month = "Mesačná";
export const five_month = "5 Mesačná";
export const yearly = "Ročná";

const CheckboxValidity = ({dataSetter}) => {
	const [validityFilter, setValidityFilter] = useState({
		three_month: true,
		month: true,
		five_month: true,
		yearly: true
	});

	const checkboxHandler = ({target}) => {
		const {name} = target;
		const inputFilter = {...validityFilter, [name]: target.checked};

		setValidityFilter(inputFilter);
		setRequestedPersons(inputFilter);
	};

	const setRequestedPersons = (inputObject) => {
		const outputArray = [];
		const prefix = "validity=";

		if (inputObject.month) {
			outputArray.push(prefix + month);
		}

		if (inputObject.three_month) {
			outputArray.push(prefix + three_month.replace(' ','%20'));
		}

		if (inputObject.five_month) {
			outputArray.push(prefix + five_month.replace(' ','%20'));
		}

		if (inputObject.yearly) {
			outputArray.push(prefix + yearly);
		}

		if(outputArray.length === 0){
			dataSetter = "";
		} else {
			console.log(outputArray.join("&"));
			dataSetter(outputArray.join("&"));
		}
	};

	return (
		<div>
			<FormControlLabel
				control={<Checkbox name={"month"} checked={validityFilter.month} onChange={event => checkboxHandler(event)}/>}
				label={month}
			/>
			<FormControlLabel
				control={<Checkbox name={"three_month"} checked={validityFilter.three_month} onChange={event => checkboxHandler(event)}/>}
				label={three_month}
			/>
			<FormControlLabel
				control={<Checkbox name={"five_month"} checked={validityFilter.five_month} onChange={event => checkboxHandler(event)}/>}
				label={five_month}
			/>
			<FormControlLabel
				control={<Checkbox name={"yearly"} checked={validityFilter.yearly} onChange={event => checkboxHandler(event)}/>}
				label={yearly}
			/>
		</div>
	)
};
export default CheckboxValidity;