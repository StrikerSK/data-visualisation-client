import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useDispatch} from "react-redux";
import {updateBarGrouping, updateBarLayout} from "../../lib/actions";

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export const defaultLayoutValue = "vertical";
export const defaultGroupingValue = "stacked";

export const LayoutSelect = () => {
	const dispatch = useDispatch();
	const [layout, setLayout] = useState(defaultLayoutValue);

	const handleChange = event => {
		const {value} = event.target;
		setLayout(value);
		dispatch(updateBarLayout(value));
	};

	return (
		<FormControl className={useStyles().formControl}>
			<InputLabel id="color-selector">Rozloženie</InputLabel>
			<Select
				labelId="color-selector"
				id="color-selector"
				value={layout}
				onChange={handleChange}
				autoWidth
			>
				<MenuItem value={"vertical"} defaultChecked={true}>Vertikálne</MenuItem>
				<MenuItem value={"horizontal"}>Horizontálne</MenuItem>
			</Select>
		</FormControl>
	);
};

export const GroupModeSelect = () => {
	const dispatch = useDispatch();
	const [grouping, setGrouping] = useState(defaultGroupingValue);

	const handleChange = event => {
		const {value} = event.target;
		setGrouping(value);
		dispatch(updateBarGrouping(value));
	};

	return (
		<FormControl className={useStyles().formControl}>
			<InputLabel id="color-selector">Zobrazenie</InputLabel>
			<Select
				labelId="color-selector"
				id="color-selector"
				value={grouping}
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
