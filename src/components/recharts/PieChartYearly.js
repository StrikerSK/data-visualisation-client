import React, {useEffect, useState} from "react";
import {Pie, PieChart, ResponsiveContainer} from "recharts";
import {connect} from "react-redux";

import {pieDataGetter} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {generateColor} from "../../lib/Functions";
import {accessAll} from "../../lib/ReduceAccessor";

const PieChartYearly = ({months, person, validity, sellType}) => {
	const [data, setData] = useState([]);
	const [color, setColor] = useState("");
	const [isLoaded, changeLoadedState] = useState(false);

	const processData = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		setColor(generateColor());
		pieDataGetter([months, person, validity, sellType], processData);
	}, [months, person, validity, sellType]);

	const pieChart = (
		<ResponsiveContainer width="100%" height="100%">
			<PieChart>
				<Pie data={data}
				     dataKey="value"
				     nameKey="label"
				     cx="50%"
				     cy="50%"
					// outerRadius={radius}
					 fill={color}
					 label={({cx, cy, midAngle, innerRadius, outerRadius, value, index}) => {
						 const RADIAN = Math.PI / 180;
						 // eslint-disable-next-line
						 const radius = 25 + innerRadius + (outerRadius - innerRadius);
						 // eslint-disable-next-line
						 const x = cx + radius * Math.cos(-midAngle * RADIAN);
						 // eslint-disable-next-line
						 const y = cy + radius * Math.sin(-midAngle * RADIAN);

						 return (
							 <text
								 x={x}
								 y={y}
								 fill={color}
								 textAnchor={x > cx ? "start" : "end"}
								 dominantBaseline="central"
							 >
								 {data[index].id} ({value})
							 </text>
						 );
					 }}/>
			</PieChart>
		</ResponsiveContainer>
	);

	return (
		<SpinnerComponent children={pieChart} isDataLoaded={isLoaded}/>
	);
};

export default connect(accessAll)(PieChartYearly);
