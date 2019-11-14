import React, {useEffect, useState} from 'react';
import {ResponsiveWaffle} from "@nivo/waffle";
import {pieDataGetter} from "../../lib/DataFetcher";
import SpinnerComponent from "../../lib/SpinnerComponent";
import {GraphContainer} from "../../lib/LayoutContainers";

const NivoWaffleComponent = () => {
	const [data, setData] = useState([{}]);
	const [maxValue, setMaxValue] = useState(0);
	const [isLoaded, changeLoadedState] = useState(false);

	useEffect(() => {
		pieDataGetter([], finaliseTransaction);
	}, []);

	const finaliseTransaction = (result) => {
		setData(result);
		countTotal(result);
		changeLoadedState(true);
	};

	const countTotal = (inputArray) => {
		let sum = 0;
		inputArray.forEach(({value}) => {
			sum += value;
		});
		setMaxValue(sum);
	};

	const waffleGraph = (
		<ResponsiveWaffle
			data={data}
			total={maxValue}
			rows={12}
			columns={12}
			margin={{top: 10, right: 10, bottom: 10, left: 120}}
			colors={{scheme: 'nivo'}}
			borderColor={{from: 'color', modifiers: [['darker', 0.3]]}}
			animate={true}
			motionStiffness={90}
			motionDamping={11}
			legends={[
				{
					anchor: 'top-left',
					direction: 'column',
					justify: false,
					translateX: -100,
					translateY: 0,
					itemsSpacing: 4,
					itemWidth: 100,
					itemHeight: 20,
					itemDirection: 'left-to-right',
					itemOpacity: 1,
					itemTextColor: '#777',
					symbolSize: 20,
					effects: [
						{
							on: 'hover',
							style: {
								itemTextColor: '#000',
								itemBackground: '#f7fafb'
							}
						}
					]
				}
			]}
		/>
	);

	return (
		<GraphContainer>
			<SpinnerComponent children={waffleGraph} isDataLoaded={isLoaded}/>
		</GraphContainer>
	)
};
export default NivoWaffleComponent;
