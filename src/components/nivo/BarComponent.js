import React, {useState, useEffect} from 'react';
import {ResponsivePie} from "nivo";

const divStyle = {
	height: "600px",
	width: "600px",
	padding: "50px"
};

const BarComponent = () => {
	const [data, setData] = useState([{}]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		fetch("http://localhost:8080/getPerson", {method: "GET"})
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
			<ResponsivePie
				data={data}
				margin={{top: 40, right: 80, bottom: 80, left: 80}}
				innerRadius={0.5}
				padAngle={0.7}
				cornerRadius={3}
				colors={{scheme: 'nivo'}}
				borderWidth={1}
				radialLabelsSkipAngle={10}
				radialLabelsTextXOffset={6}
				radialLabelsTextColor="#333333"
				radialLabelsLinkOffset={0}
				radialLabelsLinkDiagonalLength={16}
				radialLabelsLinkHorizontalLength={24}
				radialLabelsLinkStrokeWidth={1}
				slicesLabelsSkipAngle={10}
				slicesLabelsTextColor="#333333"
				animate={true}
				motionStiffness={90}
				motionDamping={15}
				legends={[
					{
						anchor: 'bottom',
						direction: 'row',
						translateY: 56,
						itemWidth: 100,
						itemHeight: 18,
						itemTextColor: '#999',
						symbolSize: 18,
						symbolShape: 'circle',
						effects: [
							{
								on: 'hover',
								style: {
									itemTextColor: '#000'
								}
							}
						]
					}
				]}
			/>
		</div>
	)
};

export default BarComponent;