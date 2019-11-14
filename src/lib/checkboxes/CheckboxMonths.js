import React, {useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";

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

const CheckboxMonths = ({dataSetter}) => {
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
		const prefix = "month=";

		if (inputObject.january) {
			outputArray.push(prefix + january);
		}

		if (inputObject.february) {
			outputArray.push(prefix + february);
		}

		if (inputObject.march) {
			outputArray.push(prefix + march);
		}

		if (inputObject.april) {
			outputArray.push(prefix + april);
		}

		if (inputObject.may) {
			outputArray.push(prefix + may);
		}

		if (inputObject.june) {
			outputArray.push(prefix + june);
		}

		if (inputObject.july) {
			outputArray.push(prefix + july);
		}

		if (inputObject.august) {
			outputArray.push(prefix + august);
		}

		if (inputObject.september) {
			outputArray.push(prefix + september);
		}

		if (inputObject.october) {
			outputArray.push(prefix + october);
		}

		if (inputObject.november) {
			outputArray.push(prefix + november);
		}

		if (inputObject.december) {
			outputArray.push(prefix + december);
		}

		dataSetter(outputArray.join("&"));
	};

	return (
		<div>
			<FormControl component={"fieldset"}>
				<FormLabel component="legend">Filter podľa mesiacov</FormLabel>
				<FormGroup row>
					<FormControlLabel
						control={<Checkbox name={"january"} checked={monthChecks.january}
						                   onChange={event => checkboxHandler(event)}/>}
						label={january}
					/>
					<FormControlLabel
						control={<Checkbox name={"february"} checked={monthChecks.february}
						                   onChange={event => checkboxHandler(event)}/>}
						label={february}
					/>
					<FormControlLabel
						control={<Checkbox name={"march"} checked={monthChecks.march}
						                   onChange={event => checkboxHandler(event)}/>}
						label={march}
					/>
					<FormControlLabel
						control={<Checkbox name={"april"} checked={monthChecks.april}
						                   onChange={event => checkboxHandler(event)}/>}
						label={april}
					/>
					<FormControlLabel
						control={<Checkbox name={"may"} checked={monthChecks.may}
						                   onChange={event => checkboxHandler(event)}/>}
						label={may}
					/>
					<FormControlLabel
						control={<Checkbox name={"june"} checked={monthChecks.june}
						                   onChange={event => checkboxHandler(event)}/>}
						label={june}
					/>
					<FormControlLabel
						control={<Checkbox name={"july"} checked={monthChecks.july}
						                   onChange={event => checkboxHandler(event)}/>}
						label={july}
					/>
					<FormControlLabel
						control={<Checkbox name={"august"} checked={monthChecks.august}
						                   onChange={event => checkboxHandler(event)}/>}
						label={august}
					/>
					<FormControlLabel
						control={<Checkbox name={"september"} checked={monthChecks.september}
						                   onChange={event => checkboxHandler(event)}/>}
						label={september}
					/>
					<FormControlLabel
						control={<Checkbox name={"october"} checked={monthChecks.october}
						                   onChange={event => checkboxHandler(event)}/>}
						label={october}
					/>
					<FormControlLabel
						control={<Checkbox name={"november"} checked={monthChecks.november}
						                   onChange={event => checkboxHandler(event)}/>}
						label={november}
					/>
					<FormControlLabel
						control={<Checkbox name={"december"} checked={monthChecks.december}
						                   onChange={event => checkboxHandler(event)}/>}
						label={december}
					/>
				</FormGroup>
			</FormControl>
		</div>
	)
};
export default CheckboxMonths;