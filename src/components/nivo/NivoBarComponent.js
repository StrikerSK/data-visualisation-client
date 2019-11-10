import React, {useState, useEffect} from 'react';
import {ResponsiveBar} from "@nivo/bar";
import '../../css/GraphContainer.scss'
import SpinnerComponent from "../../lib/SpinnerComponent";
import {barDataGetter} from "../../lib/DataFetcher";

const NivoBarComponent = ({color, parametersList}) => {
	const [data, setData] = useState([{}]);
	const [isLoaded, changeLoadedState] = useState(false);

	useEffect(() => {
		barDataGetter(parametersList, finaliseTransaction);
	}, [parametersList]);

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	const barGraph = (
		<ResponsiveBar
			data={data}
			keys={['Dospelý', 'Dôchodcovia', 'Juniori', 'Študenti', 'Prenosné']}
			indexBy="month"
			margin={{top: 30, right: 30, bottom: 80, left: 80}}
			padding={0.4}
			groupMode="grouped"
			colors={{scheme: color}}
			defs={[
				{
					id: 'dots',
					type: 'patternDots',
					background: 'inherit',
					color: '#38bcb2',
					size: 4,
					padding: 1,
					stagger: true
				},
				{
					id: 'lines',
					type: 'patternLines',
					background: 'inherit',
					color: '#eed312',
					rotation: -45,
					lineWidth: 6,
					spacing: 10
				}
			]}
			borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
			axisTop={null}
			axisRight={null}
			axisBottom={(window.innerWidth < 770 ? null : {
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Month',
				legendPosition: 'middle',
				legendOffset: 32
			})}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Ticket sell count',
				legendPosition: 'middle',
				legendOffset: -60
			}}
			enableLabel={(window.innerWidth >= 770)}
			labelSkipWidth={12}
			labelSkipHeight={12}
			labelTextColor={{from: 'color', modifiers: [['darker', 1.6]]}}
			legends={[
				{
					dataFrom: 'keys',
					anchor: 'bottom',
					direction: 'row',
					justify: false,
					translateX: 0,
					translateY: 80,
					itemsSpacing: 2,
					itemWidth: 80,
					itemHeight: 20,
					itemDirection: 'left-to-right',
					itemOpacity: 0.85,
					symbolSize: 20,
					effects: [
						{
							on: 'hover',
							style: {
								itemOpacity: 1
							}
						}
					]
				}
			]}
			animate={true}
			motionStiffness={90}
			motionDamping={15}
		/>
	);

	return <SpinnerComponent isDataLoaded={isLoaded} children={barGraph}/>
};
export default NivoBarComponent;
