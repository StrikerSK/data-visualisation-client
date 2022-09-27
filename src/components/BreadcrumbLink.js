import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link"
import PropTypes from 'prop-types';

const BreadcrumbLink = ({name, itemList}) => {
	return (
		<div className="breadcrumb-link-container">
			<span>{name}</span>
			<Breadcrumbs aria-label="breadcrumb">
				{itemList.map(({name, link}, index) => {
					return <Link className="breadcrumb-link" key={index} color="inherit" href={link}>{name}</Link>
				})}
			</Breadcrumbs>
		</div>
	)
};

BreadcrumbLink.propTypes = {
	name: PropTypes.string,
	itemList: PropTypes.array,
}

export default BreadcrumbLink;
