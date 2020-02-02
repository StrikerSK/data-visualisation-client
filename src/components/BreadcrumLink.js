import styled from "styled-components";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import React from "react";

const InlineBlock = styled.div`
	width: 50%;
	height: max-content;
	
	grid-row: ${props => props.row};
	justify-self: center;
	align-self: start;
	
	display: grid;
	grid-template-columns: 10% 90%;
	@media screen and (max-width: 770px) {
		width: 100%;
		margin-left: 5px;
		margin-right: 5px;

		grid-template-columns: 100%;
		grid-template-rows: max-content max-content;
	}
`;

const BreadcrumbLink = ({name, itemList}) => {
	return (
		<InlineBlock>
			{name}
			<Breadcrumbs aria-label="breadcrumb">
				{itemList.map(({name, link}) => {
					return <Link color="inherit" href={link}>{name}</Link>
				})}
			</Breadcrumbs>
		</InlineBlock>
	)
};
export default BreadcrumbLink;