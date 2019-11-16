import React, {useState} from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import {useDispatch} from "react-redux";
import {actions} from "../actions";

export const adults = "Dospelý";
export const juniors = "Juniori";
export const seniors = "Dôchodcovia";
export const students = "Študenti";
export const portable = "Prenosná";
export const portableData = "Prenosné";

export const defaultPersonRequestParams = "person=Dospelý&person=Dôchodcovia&person=Študenti&person=Prenosná&person=Juniori";

const CheckboxPerson = ({dataSetter}) => {
	const dispatch = useDispatch();

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

	const setRequestedPersons = (inputObject) => {
		const outputArray = [];

		if (inputObject.adults) {
			addWithPrefix(adults);
		}

		if (inputObject.seniors) {
			addWithPrefix(seniors);
		}

		if (inputObject.students) {
			addWithPrefix(students);
		}

		if (inputObject.portable) {
			addWithPrefix(portable);
		}

		if (inputObject.juniors) {
			addWithPrefix(juniors);
		}

		dataSetter(outputArray.join("&"));
		dispatch(actions(outputArray.join("&")));

		function addWithPrefix(person) {
			outputArray.push("person=" + person);
		}
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
	);
};
export default CheckboxPerson;