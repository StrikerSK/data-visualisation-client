import React from "react";
import {css} from "@emotion/core";
import {ClipLoader} from "react-spinners";
import {graphBox} from "./ComponentStyles";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export const SpinnerComponent = ({children, isDataLoaded}) => {
	return (
		<div style={graphBox} className={"graph-component"}>
			{isDataLoaded ? (children) : (<ClipLoader css={override} sizeUnit={"px"} size={150} color={"#123abc"}/>)}
		</div>
	);
};
export default SpinnerComponent;