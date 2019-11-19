import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useDispatch} from "react-redux";
import {updateColor} from "../../lib/actions";

export const defaultColorName = "nivo";

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export const ColorSchemeSelector = () => {
	const dispatch = useDispatch();
	const [color, setColor] = React.useState("nivo");
	const classes = useStyles();

	const handleChange = event => {
		const colorName = event.target.value;
		setColor(colorName);
		dispatch(updateColor(colorName))
	};

	return (
		<FormControl className={classes.formControl}>
			<InputLabel id="color-selector">Výber farby</InputLabel>
			<Select
				labelId="color-selector"
				id="color-selector"
				value={color}
				onChange={handleChange}
				autoWidth
			>
				<MenuItem value="" disabled><em>Výber farby</em></MenuItem>
				<MenuItem value={"nivo"}>Nivo</MenuItem>
				<MenuItem value={"dark2"}>Dark</MenuItem>
				<MenuItem value={"pastel1"}>Pastel</MenuItem>
				<MenuItem value={"set1"}>Set 1</MenuItem>
				<MenuItem value={"set2"}>Set 2</MenuItem>
				<MenuItem value={"set3"}>Set 3</MenuItem>
				<MenuItem value={"paired"}>Paired</MenuItem>
				<MenuItem value={"category10"}>Category 10</MenuItem>
			</Select>
		</FormControl>
	)
};

export default ColorSchemeSelector;
