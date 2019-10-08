import React, {useState, useEffect} from 'react';
import {ResponsiveWaffle} from "@nivo/waffle";

const divStyle = {
	height: "600px",
	width: "80vw"
};

const WaffleComponent = () => {
	const [data, setData] = useState([{}]);
	const [maxValue, setMaxValue] = useState(0);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		fetch("http://localhost:8080/nivo/waffle", {method: "GET"})
			.then(response => response.json())
			.then((result) => parseData(result))
	};

	const parseData = (result) => {
		console.log(result);
		countTotal(result);
		setData(result);
		console.log(data);
	};

	const countTotal = (inputArray) => {
		let sum = 0;
		inputArray.forEach(({value}) => {
			sum += value;
		});
		setMaxValue(sum);
	};

	return (
		<div style={divStyle}>
			<ResponsiveWaffle
				data={data}
				total={maxValue}
				rows={12}
				columns={12}
				margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
				colors={{ scheme: 'nivo' }}
				borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
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
		</div>
	);
};
export default WaffleComponent;