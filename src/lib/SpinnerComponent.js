import React from 'react';
import { css } from '@emotion/core';
import {ClipLoader} from "react-spinners";
import {graph_box} from "./ComponentStyles";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export const SpinnerComponent = ({children, isDataLoaded}) => {
	return (
		<div style={graph_box} className={"graph-component"}>
			{isDataLoaded ? (children) : (<ClipLoader css={override} sizeUnit={"px"} size={150} color={'#123abc'}/>)}
		</div>
	)
};
export default SpinnerComponent;