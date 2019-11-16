import React, {useState} from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {useDispatch} from "react-redux";
import {updateValidity} from "../actions";

const three_month = "3 Mesačná";
const month = "Mesačná";
const five_month = "5 Mesačná";
const yearly = "Ročná";

export const defaultValidityRequestParams = "validity=Mesačná&validity=3%20Mesačná&validity=5%20Mesačná&validity=Ročná";

const CheckboxValidity = ({dataSetter}) => {
	const dispatch = useDispatch();
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

		if (inputObject.month) {
			addWithPrefix(month);
		}

		if (inputObject.three_month) {
			addWithPrefix(three_month.replace(" ", "%20"));
		}

		if (inputObject.five_month) {
			addWithPrefix(five_month.replace(" ", "%20"));
		}

		if (inputObject.yearly) {
			addWithPrefix(yearly);
		}

		dataSetter(outputArray.join("&"));
		dispatch(updateValidity(outputArray.join("&")));

		function addWithPrefix(validity) {
			outputArray.push("validity=" + validity);
		}
	};

	return (
		<div>
			<FormControl component={"fieldset"}>
				<FormLabel component="legend">Filter podľa platnosti</FormLabel>
				<FormGroup row>
					<FormControlLabel
						control={<Checkbox name={"month"} checked={validityFilter.month}
						                   onChange={event => checkboxHandler(event)}/>}
						label={month}
					/>
					<FormControlLabel
						control={<Checkbox name={"three_month"} checked={validityFilter.three_month}
						                   onChange={event => checkboxHandler(event)}/>}
						label={three_month}
					/>
					<FormControlLabel
						control={<Checkbox name={"five_month"} checked={validityFilter.five_month}
						                   onChange={event => checkboxHandler(event)}/>}
						label={five_month}
					/>
					<FormControlLabel
						control={<Checkbox name={"yearly"} checked={validityFilter.yearly}
							          onChange={event => checkboxHandler(event)}/>}
						label={yearly}
					/>
				</FormGroup>
			</FormControl>
		</div>
	)
};
export default CheckboxValidity;