import React, {useState, useEffect} from 'react';
import {ResponsivePie} from "nivo";

const BarComponent = () => {
	const [data, setData] = useState([]);
	let testingData = [];

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
		testingData = result;
		console.log(testingData);
		console.log(data);
	};

	return (
		<ResponsivePie
			data={testingData}
			margin={{top: 40, right: 80, bottom: 80, left: 80}}
			innerRadius={0.5}
			padAngle={0.7}
			cornerRadius={3}
			colors={{scheme: 'nivo'}}
			borderWidth={1}
			// borderColor={{from: 'color', modifiers: [['darker', 0.2]]}}
			radialLabelsSkipAngle={10}
			radialLabelsTextXOffset={6}
			radialLabelsTextColor="#333333"
			radialLabelsLinkOffset={0}
			radialLabelsLinkDiagonalLength={16}
			radialLabelsLinkHorizontalLength={24}
			radialLabelsLinkStrokeWidth={1}
			// radialLabelsLinkColor={{from: 'color'}}
			slicesLabelsSkipAngle={10}
			slicesLabelsTextColor="#333333"
			animate={true}
			motionStiffness={90}
			motionDamping={15}
			defs={[
				{
					id: 'dots',
					type: 'patternDots',
					background: 'inherit',
					color: 'rgba(255, 255, 255, 0.3)',
					size: 4,
					padding: 1,
					stagger: true
				},
				{
					id: 'lines',
					type: 'patternLines',
					background: 'inherit',
					color: 'rgba(255, 255, 255, 0.3)',
					rotation: -45,
					lineWidth: 6,
					spacing: 10
				}
			]}
			fill={[
				{
					match: {
						id: 'Dospelí'
					},
					id: 'dots'
				},
				{
					match: {
						id: 'c'
					},
					id: 'dots'
				},
				{
					match: {
						id: 'Dôchodcovia'
					},
					id: 'dots'
				},
				{
					match: {
						id: 'python'
					},
					id: 'dots'
				},
				{
					match: {
						id: 'scala'
					},
					id: 'lines'
				},
				{
					match: {
						id: 'lisp'
					},
					id: 'lines'
				},
				{
					match: {
						id: 'elixir'
					},
					id: 'lines'
				},
				{
					match: {
						id: 'javascript'
					},
					id: 'lines'
				}
			]}
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
	)
};

export default BarComponent;