import React from "react";
import styled from 'styled-components'
import MenuListComposition from "./SimpleMenuList";

const MenuBox = styled.div`
  	grid-column: 1/3;
	grid-row: 1;
	
	width: 200px;	
	display: grid;
	grid-template-columns: repeat(2, 50%);
	
	justify-self: right;
	align-self: center;
`;

const rechartsItems = [
	{name: "Stĺpcový graf", link: "/recharts/bar"},
	{name: "Koláčový graf", link: "/recharts/pie"},
	// {name: "Koláčové grafy", link: "/recharts/pie/collection"},
	{name: "Línový graf", link: "/recharts/line"},
	{name: "Plošný graf", link: "/recharts/area"}
];

const nivoItems = [
	{name: "Stĺpcový graf", link: "/nivo/bar"},
	{name: "Koláčový graf", link: "/nivo/pie"},
	{name: "Línový graf", link: "/nivo/line"},
	{name: "Bublinový graf", link: "/nivo/bubble"},
	{name: "Oblátkový  graf", link: "/nivo/waffle"}
];

export const LinkMenuBox = () => {

	return (
		<MenuBox>
			<MenuListComposition name={"Recharts"} items={rechartsItems}/>
			<MenuListComposition name={"Nivo"} items={nivoItems}/>
		</MenuBox>
	);

};
