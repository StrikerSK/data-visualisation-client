import React, {useEffect, useState} from "react";
import {Pie, PieChart, ResponsiveContainer} from "recharts";
import styled from "styled-components";

const PieBox = styled.div`
	width: 100%;
	height: 100%;
`;

const Headline = styled.h3`
	text-align: center;
`;

const PieChartElement = ({myData, radius}) => {
	const [color, setColor] = useState("");

	useEffect(() => {
		generateColor();
	}, []);

	const generateColor = () => {
		const letters = "0123456789ABCDEF";
		let returnColor = "#";
		for (let i = 0; i < 6; i++) {
			returnColor += letters[Math.floor(Math.random() * 16)];
		}
		setColor(returnColor);
	};

	const generateName = () => {
		const monthName = myData[0].month;
		if (monthName !== undefined) {
			return <Headline>{monthName}</Headline>;
		}
	};

	return (
		<PieBox>
			{generateName()}
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie data={myData}
					     dataKey="value"
					     nameKey="nazov"
					     cx="50%"
					     cy="50%"
					     outerRadius={radius}
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
								     {myData[index].name} ({value})
							     </text>
						     );
					     }}/>
				</PieChart>
			</ResponsiveContainer>
		</PieBox>
	);
};
export default PieChartElement;
