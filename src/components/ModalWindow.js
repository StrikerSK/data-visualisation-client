import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import {GroupModeSelect, LayoutSelect} from "./selects/LayoutSelect";
import CheckboxPerson from "./checkboxes/CheckboxPerson";
import CheckboxValidity from "./checkboxes/CheckboxValidity";
import CheckboxMonths from "./checkboxes/CheckboxMonths";
import CheckboxSellType from "./checkboxes/CheckboxSellType";

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		width: '40%',
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	button: {
		margin: theme.spacing(1),
	}
}));

const getModalStyle = () => {
	return {
		top: `50%`,
		left: `50%`,
		transform: `translate(-50%, -50%)`
	}
};

const ModalWindow = () => {
	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="contained" onClick={handleOpen} color="primary" className={classes.button}>Panel s
				filtrami</Button>

			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={handleClose}
			>

				<div style={modalStyle} className={classes.paper}>
					<GroupModeSelect/>
					<LayoutSelect/>
					<CheckboxPerson/>
					<CheckboxValidity/>
					<CheckboxMonths/>
					<CheckboxSellType/>
				</div>
			</Modal>
		</div>
	)
};
export default ModalWindow;