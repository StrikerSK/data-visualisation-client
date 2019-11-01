import React, {useState, useEffect} from 'react';
import {ResponsiveLine} from "@nivo/line";
import {host_url} from "../../App";

const LineComponent = ({color, personParams, validityParams, monthParams, sellTypeParam}) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, [personParams, validityParams, monthParams, sellTypeParam]);

	const getData = () => {
		fetch(host_url + "/nivo/line?" + personParams
			+ (personParams !== '' ? "&" : "") + validityParams
			+ (personParams.concat(validityParams) !== "" ? "&" : "") + monthParams
			+ (personParams.concat(validityParams, monthParams) !== "" ? "&" : "") + sellTypeParam, {method: "GET"})
			.then(response => response.json())
			.then(result => setData(result))
	};

	return (
		<ResponsiveLine
			data={data}
			margin={{top: 10, right: 40, bottom: 80, left: 80}}
			xScale={{type: 'point'}}
			yScale={{type: 'linear', stacked: true, min: 'auto', max: 'auto'}}
			curve="linear"
			axisTop={null}
			axisRight={null}
			axisBottom={(window.innerWidth < 770 ? null : {
				orient: 'bottom',
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Mesiac',
				legendOffset: 36,
				legendPosition: 'middle'
			})}
			axisLeft={{
				orient: 'left',
				tickSize: 5,
				tickPadding: 10,
				tickRotation: 0,
				legend: 'Počet predaných lístkov',
				legendOffset: -70,
				legendPosition: 'middle'
			}}
			colors={{scheme: color}}
			pointSize={10}
			pointColor={{theme: 'background'}}
			pointBorderWidth={2}
			pointBorderColor={{from: 'serieColor'}}
			pointLabel="y"
			pointLabelYOffset={-12}
			useMesh={true}
			legends={[
				{
					anchor: 'bottom',
					direction: 'row',
					justify: false,
					translateX: 0,
					translateY: 60,
					itemsSpacing: 0,
					itemDirection: 'left-to-right',
					itemWidth: 80,
					itemHeight: 10,
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
	)
};

export default LineComponent;