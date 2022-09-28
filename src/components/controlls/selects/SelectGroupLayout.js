import React from "react";
import {updateBarGrouping} from "../../../lib/actions";
import SelectTemplate from "./SelectTemplate";
import {connect} from "react-redux";

const GroupLayout = ({grouping}) => {

	const name = "Zoskupenie";
	const valueObject = [
		{
			value: "stacked",
			name: "Skladané"
		},
		{
			value: "grouped",
			name: "Zoskupené"
		}
	]

	return (
		<SelectTemplate propValue={grouping} selectName={name} selectOptions={valueObject} dispatchCallback={updateBarGrouping}/>
	);
};

const mapStateToProps = state => ({
	grouping: state.generalReducer.barGroupingValue,
});

export default connect(mapStateToProps)(GroupLayout);