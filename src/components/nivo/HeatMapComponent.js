import React, {useState, useEffect} from 'react';
import {ResponsiveHeatMap} from "@nivo/heatmap";
import {host_url} from "../../App";

const HeatMapComponent = ({color, validityParams, sellTypeParam}) => {
	const [data, setData] = useState([{}]);

	useEffect(() => {
		getData();
	}, [validityParams, sellTypeParam]);

	const getData = () => {
		fetch(host_url + "/nivo/bar?"  + validityParams
			+ (validityParams !== "" ? "&" : "") + sellTypeParam, {method: "GET"})
			.then(response => response.json())
			.then(result => setData(result))
	};

	return (
		<ResponsiveHeatMap
			data={data}
			keys={['Dospelý', 'Dôchodcovia', 'Juniori', 'Študenti', 'Prenosné']}
			indexBy="month"
			margin={{top: 100, right: 0, bottom: 0, left: 75}}
			forceSquare={(window.innerWidth >= 770)}
			colors={color}
			axisTop={{orient: 'top', tickSize: 5, tickPadding: 5, tickRotation: -90, legend: '', legendOffset: 36}}
			axisRight={null}
			axisBottom={null}
			axisLeft={{
				orient: 'left',
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Mesiac',
				legendPosition: 'middle',
				legendOffset: -60
			}}
			cellOpacity={1}
			cellBorderColor={{from: 'color', modifiers: [['darker', 0.4]]}}
			labelTextColor={{from: 'color', modifiers: [['darker', 1.8]]}}
			defs={[
				{
					id: 'lines',
					type: 'patternLines',
					background: 'inherit',
					color: 'rgba(0, 0, 0, 0.1)',
					rotation: -45,
					lineWidth: 4,
					spacing: 7
				}
			]}
			fill={[{id: 'lines'}]}
			animate={true}
			motionStiffness={80}
			motionDamping={9}
			hoverTarget="cell"
			cellHoverOthersOpacity={0.25}
		/>
	)
};

export default HeatMapComponent;