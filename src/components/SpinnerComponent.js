import React from "react";
import {css} from "@emotion/core";
import {ClipLoader} from "react-spinners";
import styled from "styled-components";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const SpinnerLayout = styled.div`
	height: 100%;
	width: 100%;

  	grid-column: 1;
	grid-row: 2;
	place-self: center;

	@media screen and (max-width: 770px) {
		grid-row: 2;
	}
`;

export const SpinnerComponent = ({children, isDataLoaded}) => {
	return (
		<SpinnerLayout>
			{isDataLoaded ? (children) : (<ClipLoader css={override} sizeUnit={"px"} size={150} color={"#123abc"}/>)}
		</SpinnerLayout>
	);
};
export default SpinnerComponent;