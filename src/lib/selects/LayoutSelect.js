import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
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

export const LayoutSelect = ({current, dataSetter}) => {

	const handleChange = event => {
		dataSetter(event.target.value);
	};

	return (
		<FormControl className={useStyles().formControl}>
			<InputLabel id="color-selector">Rozloženie</InputLabel>
			<Select
				labelId="color-selector"
				id="color-selector"
				value={current}
				onChange={handleChange}
				autoWidth
			>
				<MenuItem value={"vertical"} defaultChecked={true}>Vertikálne</MenuItem>
				<MenuItem value={"horizontal"}>Horizontálne</MenuItem>
			</Select>
		</FormControl>
	);
};

export const GroupModeSelect = ({current, dataSetter}) => {

	const handleChange = event => {
		dataSetter(event.target.value);
	};

	return (
		<FormControl className={useStyles().formControl}>
			<InputLabel id="color-selector">Zobrazenie</InputLabel>
			<Select
				labelId="color-selector"
				id="color-selector"
				value={current}
				onChange={handleChange}
				autoWidth
			>
				<MenuItem value={"stacked"} defaultChecked={true}>Skladané</MenuItem>
				<MenuItem value={"grouped"}>Zoskupené</MenuItem>
			</Select>
		</FormControl>
	);
};
export default {LayoutSelect, GroupModeSelect};
