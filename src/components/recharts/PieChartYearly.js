import React, {useEffect, useState} from "react";
import {pieDataGetter} from "../../lib/DataFetcher";
import {Pie, PieChart, ResponsiveContainer} from "recharts";
import SpinnerComponent from "../SpinnerComponent";

const PieChartYearly = () => {
	const [data, setData] = useState([]);
	const [color, setColor] = useState("");
	const [isLoaded, changeLoadedState] = useState(false);

	const generateColor = () => {
		const letters = "0123456789ABCDEF";
		let returnColor = "#";
		for (let i = 0; i < 6; i++) {
			returnColor += letters[Math.floor(Math.random() * 16)];
		}
		setColor(returnColor);
	};

	const processData = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		generateColor();
		pieDataGetter([], processData);
	}, []);

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

export default PieChartYearly;
