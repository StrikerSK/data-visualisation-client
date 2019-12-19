import * as React from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import styled from "styled-components";

const TestOne = styled.div`
	width: 100%;
	height: 100%;
	
	justify-self: center;
`;

const MenuListComposition = ({name, items}) => {
	const history = useHistory();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		console.log(window.location.pathname);
		setAnchorEl(event.currentTarget);
	};

	const handleLinkClick = (linkTo) => {
		history.push(linkTo);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<TestOne>
			<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>{name}</Button>
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
		</TestOne>
	);
};
export default MenuListComposition;