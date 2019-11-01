import React, {useState, useEffect} from 'react';
import {ResponsivePie} from "@nivo/pie";
import SpinnerComponent from "../../lib/SpinnerComponent";
import {pieDataGetter} from "../../lib/DataFetcher";

const PieComponent = ({color, parametersList}) => {
	const [data, setData] = useState([{}]);
	const [isLoaded, changeLoadedState] = useState(false);

	useEffect(() => {
		pieDataGetter(parametersList, finaliseTransaction);
	}, [parametersList]);

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	const pieChart = (
		<ResponsivePie
			data={data}
			margin={{top: 20, right: 40, bottom: 70, left: 40}}
			innerRadius={0.5}
			padAngle={0.7}
			cornerRadius={3}
			colors={{scheme: color}}
			borderWidth={1}
			borderColor={{from: 'color', modifiers: [['darker', 0.2]]}}
			enableRadialLabels={(window.innerWidth >= 770)}
			radialLabelsSkipAngle={10}
			radialLabelsTextXOffset={6}
			radialLabelsTextColor="#333333"
			radialLabelsLinkOffset={0}
			radialLabelsLinkDiagonalLength={16}
			radialLabelsLinkHorizontalLength={24}
			radialLabelsLinkStrokeWidth={1}
			radialLabelsLinkColor={{from: 'color'}}
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
						id: 'Prenosná'
					},
					id: 'dots'
				},
				{
					match: {
						id: 'Dospelý'
					},
					id: 'dots'
				},
				{
					match: {
						id: 'Študenti'
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
						id: 'Juniori'
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
	);

	return (
		<SpinnerComponent children={pieChart} isDataLoaded={isLoaded}/>
	);
};
export default PieComponent;