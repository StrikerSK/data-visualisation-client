import React from "react";
import {updateBarLayout} from "../../../lib/actions";
import SelectTemplate from "./SelectTemplate";
import {connect} from "react-redux";

const BarLayout = ({layout}) => {

	const name = "Rozloženie";
	const valueObject = [
		{
			value: "vertical",
			name: "Vertikálne"
		},
		{
			value: "horizontal",
			name: "Horizontálne"
		}
	]

	return (
		<SelectTemplate propValue={layout} selectName={name} selectOptions={valueObject} dispatchCallback={updateBarLayout}/>
	);
};

const mapStateToProps = state => ({
	layout: state.generalReducer.barLayoutValue
});

export default connect(mapStateToProps)(BarLayout);