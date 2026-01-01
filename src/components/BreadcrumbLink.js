import React from "react";
import PropTypes from 'prop-types';

const BreadcrumbLink = ({name, itemList}) => {
	return (
		<div className="breadcrumb-link-container">
			<span>{name}</span>
			<ul className="breadcrumb">
				{itemList.map(({name, link}, index) => {
					return <li key={index}><a className="breadcrumb-link" key={index} color="inherit" href={link}>{name}</a></li>
				})}
			</ul>
		</div>
	)
};

BreadcrumbLink.propTypes = {
	name: PropTypes.string,
	itemList: PropTypes.array,
}

export default BreadcrumbLink;
