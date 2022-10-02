import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useDispatch} from "react-redux";

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		width: "30%",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default ({propValue, selectName, selectOptions, dispatchCallback}) => {
	const dispatch = useDispatch();

	const handleChange = event => {
		const {value} = event.target;
		dispatch(dispatchCallback(value));
	};

	return (
		<FormControl className={useStyles().formControl}>
			<InputLabel id="color-selector">{selectName}</InputLabel>
			<Select
				labelId="color-selector"
				id="color-selector"
				value={propValue}
				onChange={handleChange}
				autoWidth
			>
				{selectOptions.map(item => {
					return <MenuItem value={item.value} defaultChecked={item.value === propValue}>{item.name}</MenuItem>
				})}
			</Select>
		</FormControl>
	);
};