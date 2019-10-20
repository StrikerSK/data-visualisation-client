import React, {useState, useEffect} from 'react';
import {ResponsiveLine} from "@nivo/line";
import {divStyle} from "../../lib/ComponentStyles";
import {host_url} from "../../App";

const LineComponent = ({color, personParams, validityParams}) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, [data]);

	const getData = () => {
		fetch(host_url + "/nivo/line?" + personParams + "&" + validityParams, {method: "GET"})
			.then(response => response.json())
			.then((result) => parseData(result))
	};

	const paramBuilder = () => {

		const finalRequestParams = "";

		if (personParams !== ""){
			finalRequestParams.concat(personParams);
		}

		if(finalRequestParams !== ""){
			finalRequestParams.concat("&" + validityParams);
		}

		return finalRequestParams;
	};

	const parseData = (result) => {
		setData(result);
	};

	return (
		<div style={divStyle} className={"graph-component"}>
			<ResponsiveLine
				data={data}
				margin={{ top: 50, right: 110, bottom: 50, left: 150 }}
				xScale={{ type: 'point' }}
				yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
				curve="linear"
				axisTop={null}
				axisRight={null}
				axisBottom={{
					orient: 'bottom',
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Mesiac',
					legendOffset: 36,
					legendPosition: 'middle'
				}}
				axisLeft={{
					orient: 'left',
					tickSize: 5,
					tickPadding: 10,
					tickRotation: 0,
					legend: 'Počet predaných lístkov',
					legendOffset: -70,
					legendPosition: 'middle'
				}}
				colors={{ scheme: color }}
				pointSize={10}
				pointColor={{ theme: 'background' }}
				pointBorderWidth={2}
				pointBorderColor={{ from: 'serieColor' }}
				pointLabel="y"
				pointLabelYOffset={-12}
				useMesh={true}
				legends={[
					{
						anchor: 'bottom-right',
						direction: 'column',
						justify: false,
						translateX: 100,
						translateY: 0,
						itemsSpacing: 0,
						itemDirection: 'left-to-right',
						itemWidth: 80,
						itemHeight: 20,
						itemOpacity: 0.75,
						symbolSize: 12,
						symbolShape: 'circle',
						symbolBorderColor: 'rgba(0, 0, 0, .5)',
						effects: [
							{
								on: 'hover',
								style: {
									itemBackground: 'rgba(0, 0, 0, .03)',
									itemOpacity: 1
								}
							}
						]
					}
				]}
			/>
		</div>
	)
};

export default LineComponent;