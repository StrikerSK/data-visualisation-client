import React from 'react';
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	}
}));

export const defaultBarOrder = ['Dospelý', 'Študenti', 'Dôchodcovia', 'Juniori',  'Prenosné'];

const BarGeneratorButton = ({dataSetter}) => {
	const classes = useStyles();

	const shuffle = () => {
		dataSetter(generateBarOrder());
	};

	const generateBarOrder = () => {
		const array = ['Dospelý', 'Študenti', 'Dôchodcovia', 'Juniori', 'Prenosné'];
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

	return (
		<Button variant="contained" onClick={() => shuffle()} color="primary" className={classes.button}>Zmeň poradie</Button>
	)
};
export default BarGeneratorButton;