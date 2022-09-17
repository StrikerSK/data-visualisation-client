import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import React from "react";

export default ({name, itemList}) => {
	return (
		<div className="breadcrumb-link-container">
			<span>{name}</span>
			<Breadcrumbs aria-label="breadcrumb">
				{itemList.map(({name, link}, index) => {
					return <Link key={index} color="inherit" href={link}>{name}</Link>
				})}
			</Breadcrumbs>
		</div>
	)
};
