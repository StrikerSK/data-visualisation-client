import React, {useState, useEffect} from 'react';
import { ResponsiveRadar } from '@nivo/radar'
import {host_url} from "../../App";

const divStyle = {
	height: "80vh",
	width: "80vw"
};

const RadarComponent = () => {
	const [data, setData] = useState([{}]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		fetch( host_url + "/nivo/bar", {method: "GET"})
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
			<ResponsiveRadar
				data={data}
				keys={['Dospelý', 'Dôchodcovia', 'Juniori', 'Študenti', 'Prenosné']}
				indexBy="month"
				maxValue="auto"
				margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
				curve="linearClosed"
				borderWidth={2}
				borderColor={{ from: 'color' }}
				gridLevels={5}
				gridShape="circular"
				gridLabelOffset={36}
				enableDots={true}
				dotSize={5}
				dotColor={{ theme: 'background' }}
				dotBorderWidth={2}
				dotBorderColor={{ from: 'color' }}
				enableDotLabel={false}
				dotLabel="value"
				dotLabelYOffset={-12}
				colors={{ scheme: 'nivo' }}
				fillOpacity={0.25}
				blendMode="multiply"
				animate={true}
				motionStiffness={90}
				motionDamping={15}
				isInteractive={true}
				legends={[
					{
						anchor: 'top-left',
						direction: 'column',
						translateX: -50,
						translateY: -40,
						itemWidth: 80,
						itemHeight: 20,
						itemTextColor: '#999',
						symbolSize: 12,
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

export default RadarComponent;