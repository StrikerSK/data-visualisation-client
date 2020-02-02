import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import {ConnectedGroupModeSelect, ConnectedLayoutSelect} from "./selects/LayoutSelect";
import CheckboxPerson from "./checkboxes/CheckboxPerson";
import CheckboxValidity from "./checkboxes/CheckboxValidity";
import CheckboxMonths from "./checkboxes/CheckboxMonths";
import CheckboxSellType from "./checkboxes/CheckboxSellType";
import styled from "styled-components";
import {adaptToWidth} from "../lib/Functions";

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		width: adaptToWidth('40%', '95%'),
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	},
	modalWindow: {
		overflow: 'scroll'
	},
	button: {
		margin: theme.spacing(1)
	}
}));

const getModalStyle = () => {
	return {
		top: `50%`,
		left: `50%`,
		transform: `translate(-50%, -50%)`
	}
};

const ModalBox = styled.div`
  	grid-column: 1;
	grid-row: 1;
	
	align-self: center;
	
	@media screen and (max-width: 770px) {
		grid-column: 1;
		grid-row: 3;
		justify-self: center;
	}
	
`;

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
		<ModalBox>
			<Button variant="contained" onClick={handleOpen} color="primary" className={classes.button}>Panel s
				filtrami</Button>

			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={handleClose}
				className={classes.modalWindow}
			>

				<div style={modalStyle} className={classes.paper}>
					<ConnectedLayoutSelect/>
					<ConnectedGroupModeSelect/>
					<CheckboxPerson/>
					<CheckboxValidity/>
					<CheckboxMonths/>
					<CheckboxSellType/>
					<Button variant="contained" onClick={handleClose} color="primary" className={classes.button}>Zavri okno</Button>
				</div>

			</Modal>
		</ModalBox>
	)
};

export default ModalWindow;