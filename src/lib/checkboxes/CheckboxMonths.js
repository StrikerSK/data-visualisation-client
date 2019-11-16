import React, {useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import {useDispatch} from "react-redux";
import {updateMonths} from "../actions";

export const january = "Január";
export const february = "Február";
export const march = "Marec";
export const april = "Apríl";
export const may = "Máj";
export const june = "Jún";
export const july = "Júl";
export const august = "August";
export const september = "September";
export const october = "Október";
export const november = "November";
export const december = "December";

export const defaultMonthRequestParams = "month=Január&month=Február&month=Marec&month=Apríl&month=Máj&month=Jún&month=Júl&month=August&month=September&month=Október&month=November&month=December";

const CheckboxMonths = () => {
	const dispatch = useDispatch();
	const [monthChecks, setMonthChecks] = useState({
		january: true,
		february: true,
		march: true,
		april: true,
		may: true,
		june: true,
		july: true,
		august: true,
		september: true,
		october: true,
		november: true,
		december: true
	});

	const checkboxHandler = ({target}) => {
		const {name} = target;
		const inputFilter = {...monthChecks, [name]: target.checked};

		setMonthChecks(inputFilter);
		setRequestedMonths(inputFilter);
	};

	const setRequestedMonths = (inputObject) => {
		const outputArray = [];

		if (inputObject.january) {
			addWithPrefix(january);
		}

		if (inputObject.february) {
			addWithPrefix(february)
		}

		if (inputObject.march) {
			addWithPrefix(march);
		}

		if (inputObject.april) {
			addWithPrefix(april);
		}

		if (inputObject.may) {
			addWithPrefix(may);
		}

		if (inputObject.june) {
			addWithPrefix(june);
		}

		if (inputObject.july) {
			addWithPrefix(july);
		}

		if (inputObject.august) {
			addWithPrefix(august);
		}

		if (inputObject.september) {
			addWithPrefix(september);
		}

		if (inputObject.october) {
			addWithPrefix(october);
		}

		if (inputObject.november) {
			addWithPrefix(november);
		}

		if (inputObject.december) {
			addWithPrefix(december);
		}

		dispatch(updateMonths(outputArray.join("&")));

		function addWithPrefix(month) {
			outputArray.push("month=" + month);
		}
	};

	return (
		<div>
			<FormControl component={"fieldset"}>
				<FormLabel component="legend">Filter podľa mesiacov</FormLabel>
				<FormGroup row>
					<FormControlLabel
						control={<Checkbox name={"january"} checked={monthChecks.january}
						                   onChange={(event) => checkboxHandler(event)}/>}
						label={january}
					/>
					<FormControlLabel
						control={<Checkbox name={"february"} checked={monthChecks.february}
						                   onChange={(event) => checkboxHandler(event)}/>}
						label={february}
					/>
					<FormControlLabel
						control={<Checkbox name={"march"} checked={monthChecks.march}
						                   onChange={(event) => checkboxHandler(event)}/>}
						label={march}
					/>
					<FormControlLabel
						control={<Checkbox name={"april"} checked={monthChecks.april}
						                   onChange={(event) => checkboxHandler(event)}/>}
						label={april}
					/>
					<FormControlLabel
						control={<Checkbox name={"may"} checked={monthChecks.may}
						                   onChange={(event) => checkboxHandler(event)}/>}
						label={may}
					/>
					<FormControlLabel
						control={<Checkbox name={"june"} checked={monthChecks.june}
						                   onChange={(event) => checkboxHandler(event)}/>}
						label={june}
					/>
					<FormControlLabel
						control={<Checkbox name={"july"} checked={monthChecks.july}
						                   onChange={(event) => checkboxHandler(event)}/>}
						label={july}
					/>
					<FormControlLabel
						control={<Checkbox name={"august"} checked={monthChecks.august}
						                   onChange={(event) => checkboxHandler(event)}/>}
						label={august}
					/>
					<FormControlLabel
						control={<Checkbox name={"september"} checked={monthChecks.september}
						                   onChange={(event) => checkboxHandler(event)}/>}
						label={september}
					/>
					<FormControlLabel
						control={<Checkbox name={"october"} checked={monthChecks.october}
						                   onChange={(event) => checkboxHandler(event)}/>}
						label={october}
					/>
					<FormControlLabel
						control={<Checkbox name={"november"} checked={monthChecks.november}
						                   onChange={(event) => checkboxHandler(event)}/>}
						label={november}
					/>
					<FormControlLabel
						control={<Checkbox name={"december"} checked={monthChecks.december}
						                   onChange={(event) => checkboxHandler(event)}/>}
						label={december}
					/>
				</FormGroup>
			</FormControl>
		</div>
	)
};
export default CheckboxMonths;