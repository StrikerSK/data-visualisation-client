import React, {useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";

export const adults = "Dospelý";
export const juniors = "Juniori";
export const seniors = "Dôchodcovia";
export const students = "Študenti";
export const portable = "Prenosná";

export const defaultPersonRequestParams = "person=Dospelý&person=Dôchodcovia&person=Študenti&person=Prenosná&person=Juniori";

const CheckboxPerson = ({dataSetter}) => {
	const [personFilter, setPersonFilter] = useState({
		adults: true,
		juniors: true,
		seniors: true,
		portable: true,
		students: true
	});

	const checkboxHandler = ({target}) => {
		const {name} = target;
		const inputFilter = {...personFilter, [name]: target.checked};

		setPersonFilter(inputFilter);
		setRequestedPersons(inputFilter);
	};

	const setRequestedPersons = (inputObjec) => {
		const outputArray = [];
		const prefix = "person=";

		if (inputObjec.adults) {
			outputArray.push(prefix + adults);
		}

		if (inputObjec.seniors) {
			outputArray.push(prefix + seniors);
		}

		if (inputObjec.students) {
			outputArray.push(prefix + students);
		}

		if (inputObjec.portable) {
			outputArray.push(prefix + portable);
		}

		if (inputObjec.juniors) {
			outputArray.push(prefix + juniors);
		}
		dataSetter(outputArray.join("&"));
	};

	return (
		<div>
			<FormControl component={"fieldset"}>
				<FormLabel component="legend">Filter podľa osôb</FormLabel>
				<FormGroup row>
					<FormControlLabel
						control={<Checkbox name={"adults"} checked={personFilter.adults}
						                   onChange={event => checkboxHandler(event)}/>}
						label={adults}
					/>
					<FormControlLabel
						control={<Checkbox name={"juniors"} checked={personFilter.juniors}
						                   onChange={event => checkboxHandler(event)}/>}
						label={juniors}
					/>
					<FormControlLabel
						control={<Checkbox name={"seniors"} checked={personFilter.seniors}
						                   onChange={event => checkboxHandler(event)}/>}
						label={seniors}
					/>
					<FormControlLabel
						control={<Checkbox name={"portable"} checked={personFilter.portable}
						                   onChange={event => checkboxHandler(event)}/>}
						label={portable}
					/>
					<FormControlLabel
						control={<Checkbox name={"students"} checked={personFilter.students}
						                   onChange={event => checkboxHandler(event)}/>}
						label={students}
					/>
				</FormGroup>
			</FormControl>
		</div>
	)
};
export default CheckboxPerson;