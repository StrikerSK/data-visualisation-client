import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	borderColor: "red"
};

export default ({children, isDataLoaded}) => {
	return (
		<div className="spinner-container">
			{isDataLoaded ? (children) : (<ClipLoader css={override} sizeUnit={"px"} size={150} color={"#123abc"}/>)}
		</div>
	);
};

