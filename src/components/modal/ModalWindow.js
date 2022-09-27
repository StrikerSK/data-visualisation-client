import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CheckboxPerson from "../controlls/checkboxes/CheckboxPerson";
import CheckboxValidity from "../controlls/checkboxes/CheckboxValidity";
import CheckboxMonths from "../controlls/checkboxes/CheckboxMonths";
import CheckboxSellType from "../controlls/checkboxes/CheckboxSellType";
import {adaptToWidth} from "../../lib/Functions";
import SelectGroupLayout from "../controlls/selects/SelectGroupLayout";
import SelectBarLayout from "../controlls/selects/SelectBarLayout";

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		width: adaptToWidth('50%', '95%'),
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		display: "flex",
		alignItems: "center",
		flexDirection: "column"
	},
	modalWindow: {
		overflow: 'scroll'
	},
	innerButton: {
		margin: theme.spacing(1),
		width: "30%"
	},
	outerButton: {
		margin: theme.spacing(1),
	},
	selectDiv: {
		width: "100%",
		display: "flex",
		justifyContent: "center"
	}
}));

const getModalStyle = () => {
	return {
		top: `50%`,
		left: `50%`,
		transform: `translate(-50%, -50%)`
	}
};

export default () => {
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
		<div className="modal-button">
			<Button variant="contained" onClick={handleOpen} color="primary" className={classes.outerButton}>Filteri</Button>

			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={handleClose}
				className={classes.modalWindow}
			>

				<div style={modalStyle} className={classes.paper}>
					<div className={classes.selectDiv}>
						<SelectBarLayout/>
						<SelectGroupLayout/>
					</div>
					<CheckboxPerson/>
					<CheckboxValidity/>
					<CheckboxMonths/>
					<CheckboxSellType/>
					<Button variant="contained" onClick={handleClose} color="primary" className={classes.innerButton}>Zavri okno</Button>
				</div>

			</Modal>
		</div>
	)
};
