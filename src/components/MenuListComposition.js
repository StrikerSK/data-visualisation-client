import * as React from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
	button: {
		width: "100%",
		height: "100%",

		display: "flex",
		justifySelf: "center"
	}
}));

export default ({name, items}) => {
	const history = useHistory();
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleLinkClick = (linkTo) => {
		history.push(linkTo);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="menu-list">
			<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} classes={{root: classes.button}}>{name}</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{items.map((item, key) => {
					return <MenuItem key={key} onClick={() => handleLinkClick(item.link)} selected={window.location.pathname === item.link}>{item.name}</MenuItem>
				})}
			</Menu>
		</div>
	);
};
