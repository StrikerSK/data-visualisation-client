import React from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useDispatch} from "react-redux";
import {updateBarDataKeys} from "../lib/actions";
import {adults, children, dataKeys, juniors, seniors, students} from "./controlls/checkboxes/CheckboxPerson";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
		width: "40%"
	}
}));

const portable = "Prenosné";
export const defaultBarOrder = dataKeys;

export default () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const generateBarOrder = () => {
		const array = [adults, students, seniors, juniors, portable, children];
		let counter = array.length;

		// While there are elements in the array
		while (counter > 0) {
			// Pick a random index
			const index = Math.floor(Math.random() * counter);
			counter--;

			// And swap the last element with it
			let temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
		}

		return array;
	};

	const shuffle = () => {
		const barOrder = generateBarOrder();
		dispatch(updateBarDataKeys(barOrder));
	};

	return (
		<Button variant="contained" onClick={() => shuffle()} color="primary" className={classes.button}>Zmeň poradie</Button>
	)
};
