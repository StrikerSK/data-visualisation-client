import React from "react";
import styled from 'styled-components'
import MenuListComposition from "./SimpleMenuList";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

const MenuBox = styled.div`
  	grid-column: 2;
	grid-row: 1;
	
	width: 300px;	
	display: grid;
	grid-template-columns: repeat(3, 33%);
	
	justify-self: right;
	align-self: center;
	
	@media screen and (max-width: 770px) {
		grid-row: 2;
		grid-column: 1/3;
		
		justify-self: center;
	}
`;

const rechartsItems = [
	{name: "Stĺpcový graf", link: "/recharts/bar"},
	{name: "Koláčový graf", link: "/recharts/pie"},
	// {name: "Koláčové grafy", link: "/recharts/pie/collection"},
	{name: "Línový graf", link: "/recharts/line"},
	{name: "Plošný graf", link: "/recharts/area"},
	{name: "Dashboard", link: "/recharts"}
];

const nivoItems = [
	{name: "Stĺpcový graf", link: "/nivo/bar"},
	{name: "Koláčový graf", link: "/nivo/pie"},
	{name: "Línový graf", link: "/nivo/line"},
	{name: "Bublinový graf", link: "/nivo/bubble"},
	{name: "Oblátkový  graf", link: "/nivo/waffle"},
	{name: "Dashboard", link: "/nivo"}
];

export const LinkMenuBox = () => {
	const history = useHistory();

	const handleClick = () => {
		history.push("/");
	};

	return (
		<MenuBox>
			<MenuListComposition name={"Recharts"} items={rechartsItems}/>
			<MenuListComposition name={"Nivo"} items={nivoItems}/>
			<Button aria-controls="simple-menu" onClick={handleClick} disabled={window.location.pathname === "/"}>Úvod</Button>
		</MenuBox>
	);

};
