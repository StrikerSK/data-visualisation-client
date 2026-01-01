import React from 'react';
import {connect} from "react-redux";
import {updateColor} from "../../../lib/actions";
import SelectTemplate from "./SelectTemplate";

const ColorScheme = ({color, isHeatmap = false}) => {
	const name = "Výber farby";

	const valueObject = [
		{
			value: "nivo",
			name: "Nivo"
		},
		{
			value: "dark2",
			name: "Dark"
		},
		{
			value: "pastel1",
			name: "Pastel"
		},
		{
			value: "set1",
			name: "Set 1"
		},
		{
			value: "set2",
			name: "Set 2"
		},
		{
			value: "set3",
			name: "Set 3"
		},
		{
			value: "paired",
			name: "Paired"
		},
		{
			value: "category10",
			name: "Category 10"
		}
	]

	const heatmapValues = [
		{
			value: "nivo",
			name: "Nivo"
		},
		{
			value: "BrBG",
			name: "BrBG"
		},
		{
			value: "PRGn",
			name: "PRGn"
		},
		{
			value: "PuOr",
			name: "PuOr"
		}
	]

	return (
		<SelectTemplate propValue={color} selectName={name} selectOptions={isHeatmap ? heatmapValues : valueObject} dispatchCallback={updateColor}/>
	);
};

const mapStateToProps = state => ({
	color: state.generalReducer.color
});

export default connect(mapStateToProps)(ColorScheme);
