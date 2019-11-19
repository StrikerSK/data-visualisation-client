import {useDispatch} from "react-redux";
import React from "react";
import {updateColor} from "../../lib/actions";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export const ColorSchemeSelectorHeatmap = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [color, setColor] = React.useState("nivo");

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
				<MenuItem value={"BrBG"}>BrBG</MenuItem>
				<MenuItem value={"PRGn"}>PRGn</MenuItem>
				<MenuItem value={"PuOr"}>PuOr</MenuItem>
			</Select>
		</FormControl>
	)
}
export default ColorSchemeSelectorHeatmap;