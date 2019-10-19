import React, {useState, useEffect} from 'react';
import {ResponsiveHeatMap} from "@nivo/heatmap";

const divStyle = {
	height: "80vh",
	width: "80vw"
};

const HeatMapComponent = () => {
	const [data, setData] = useState([{}]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		fetch("http://localhost:8080/nivo/bar", {method: "GET"})
			.then(response => response.json())
			.then((result) => parseData(result))
	};

	const parseData = (result) => {
		console.log(result);
		setData(result);
		console.log(data);
	};

	return (
		<div style={divStyle}>
			<ResponsiveHeatMap
				data={data}
				keys={['Dospelý', 'Dôchodcovia', 'Juniori', 'Študenti', 'Prenosné']}
				indexBy="month"
				margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
				forceSquare={true}
				axisTop={{ orient: 'top', tickSize: 5, tickPadding: 5, tickRotation: -90, legend: '', legendOffset: 36 }}
				axisRight={null}
				axisBottom={null}
				axisLeft={{
					orient: 'left',
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'month',
					legendPosition: 'middle',
					legendOffset: -40
				}}
				cellOpacity={1}
				cellBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
				labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.8 ] ] }}
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
				fill={[ { id: 'lines' } ]}
				animate={true}
				motionStiffness={80}
				motionDamping={9}
				hoverTarget="cell"
				cellHoverOthersOpacity={0.25}
			/>
		</div>
	)
};

export default HeatMapComponent;