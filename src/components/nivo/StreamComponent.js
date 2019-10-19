import React, {useState, useEffect} from 'react';
import {ResponsiveStream} from "@nivo/stream";
import {host_url} from "../../App";

const divStyle = {
	height: "600px",
	width: "600px",
	padding: "50px"
};

const StreamComponent = () => {
	const [data, setData] = useState([{}]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		fetch(host_url + "/getTicketData", {method: "GET"})
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
			<ResponsiveStream
				data={data}
				keys={[ 'adults', 'students', 'portable', 'seniors', 'juniors']}
				margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
				axisTop={"Test"}
				axisRight={null}
				axisBottom={{
					orient: 'bottom',
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: '',
					legendOffset: 36
				}}
				axisLeft={{ orient: 'left', tickSize: 5, tickPadding: 5, tickRotation: 0, legend: '', legendOffset: -40 }}
				offsetType="expand"
				colors={{ scheme: 'nivo' }}
				fillOpacity={0.85}
				curve="basis"
				borderColor={{ theme: 'background' }}
				defs={[
					{
						id: 'dots',
						type: 'patternDots',
						background: 'inherit',
						color: '#2c998f',
						size: 4,
						padding: 2,
						stagger: true
					},
					{
						id: 'squares',
						type: 'patternSquares',
						background: 'inherit',
						color: '#e4c912',
						size: 6,
						padding: 2,
						stagger: true
					}
				]}
				fill={[
					{
						match: {
							id: 'adults'
						},
						id: 'dots'
					},
					{
						match: {
							id: 'seniors'
						},
						id: 'squares'
					}
				]}
				dotSize={8}
				dotColor={{ from: 'color' }}
				dotBorderWidth={2}
				dotBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.7 ] ] }}
				animate={true}
				motionStiffness={90}
				motionDamping={15}
				legends={[
					{
						anchor: 'bottom-right',
						direction: 'column',
						translateX: 100,
						itemWidth: 80,
						itemHeight: 20,
						itemTextColor: '#999999',
						symbolSize: 12,
						symbolShape: 'circle',
						effects: [
							{
								on: 'hover',
								style: {
									itemTextColor: '#000000'
								}
							}
						]
					}
				]}
			/>
		</div>
	)
};

export default StreamComponent;