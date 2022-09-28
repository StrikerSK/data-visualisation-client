import React from "react";
import {connect} from "react-redux";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

import {fetchBarData, nivoBarPath} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {generateColor, getLabels} from "../../lib/Functions";
import {accessAll} from "../../lib/ReduceAccessor";

const AreaChartComponent = ({months, person, validity, sellType}) => {
	const [data, setData] = React.useState([]);
	const [line, setLine] = React.useState([]);
	const [area, setArea] = React.useState([]);
	const [isLoaded, changeLoadedState] = React.useState(false);

	const processData = (result) => {
		const createGraphElements = () => {
			getLabels(result).forEach(label => {
				const generatedColor = generateColor();
				const identification = "color" + label;

				setArea(area => [...area,
					<linearGradient id={identification} x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor={generatedColor} stopOpacity={0.8}/>
						<stop offset="95%" stopColor={generatedColor} stopOpacity={0}/>
					</linearGradient>]
				);

				setLine(line => [...line,
					<Area
						type="monotone"
						dataKey={label}
						stroke={generatedColor}
						fillOpacity={1}
						fill={"url(#" + identification + ")"}
					/>
				]);
			});

			if (area.length !== 0 && line.length !== 0) {
				setArea([]);
				setLine([]);
			}
		}

		setData(result);
		createGraphElements();
	};

	React.useEffect(() => {
		fetchBarData( nivoBarPath, [person, months, sellType, validity])
			.then(({data}) => processData(data))
			.then(() => changeLoadedState(true))
			.catch(console.error);
	}, [person, months, sellType, validity]);

	const areaChart = (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart data={data} margin={{top: 0, right: 5, left: 10, bottom: 0}}>

				<defs>
					{area}
				</defs>

				<XAxis dataKey="name"/>
				<YAxis/>
				<CartesianGrid strokeDasharray="3 3"/>
				<Tooltip/>

				{line}
			</AreaChart>
		</ResponsiveContainer>
	);

	return (
		<SpinnerComponent children={areaChart} isDataLoaded={isLoaded}/>
	);
};

export default connect(accessAll)(AreaChartComponent);
