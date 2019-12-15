import React, {useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import {useDispatch} from "react-redux";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(2),
		minWidth: '100%',
	},
	formLabel: {
		minWidth: '30%',
	}
}));

const CheckboxTemplate = ({checkItems, context, dispatchFunction, filterHeader}) => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [itemObjects, setItemObjects] = useState(checkItems);

	const checkboxHandler = ({target}) => {
		const {name} = target;
		const outputArrayOne = itemObjects.map((item) => {
			if (item.itemName === name) {
				return {...item, isChecked: !item.isChecked};
			}
			return item;
		});

		setItemObjects(outputArrayOne);
		generateRequest(outputArrayOne);
	};

	const generateRequest = (inputObject) => {
		const outputArrayTwo = inputObject
			.filter(item => item.isChecked)
			.map(({itemName}) => context + "=" + itemName.replace(' ', '%20'))
			.join("&");

		dispatch(dispatchFunction(outputArrayTwo));
	};

	const findIfChecked = (name) => {
		return itemObjects.find(({itemName}) => {
			return itemName === name
		}).isChecked;
	};

	const getCheckbox = (month) => {
		const isChecked = findIfChecked(month);
		return <Checkbox name={month} checked={isChecked} onChange={checkboxHandler}/>
	};

	return (
		<FormControl component={"fieldset"} className={classes.formControl}>
			<FormLabel component="legend">{filterHeader}</FormLabel>
			<FormGroup row>
				{checkItems.map(({itemName}) => {
					return <FormControlLabel control={getCheckbox(itemName)} label={itemName} className={classes.formLabel}/>
				})}
			</FormGroup>
		</FormControl>
	)
};
export default CheckboxTemplate;