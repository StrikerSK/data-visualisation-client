import React from "react";
import {css} from "@emotion/core";
import {ClipLoader} from "react-spinners";

const override = css`
    display: flex;
	justify-content: center;
	align-items: center;
	border-color: red;
`;

export const SpinnerComponent = ({children, isDataLoaded}) => {

	return (
		<div className="spinner-container">
			{isDataLoaded ? (children) : (<ClipLoader css={override} sizeUnit={"px"} size={150} color={"#123abc"}/>)}
		</div>
	);
};
export default SpinnerComponent;