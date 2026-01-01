import React from "react";
import {Pie, PieChart, ResponsiveContainer} from "recharts";
import {connect} from "react-redux";

import {fetchBarData, nivoPiePath} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {generateColor} from "../../lib/Functions";
import {accessAll} from "../../lib/ReduceAccessor";

const PieChartYearly = ({months, person, validity, sellType}) => {
    const [data, setData] = React.useState([]);
    const [color, setColor] = React.useState("");
    const [isLoaded, changeLoadedState] = React.useState(false);

    const processData = (result) => {
        setData(result);
        setColor(generateColor());
    };

    React.useEffect(() => {
        fetchBarData( nivoPiePath, [months, person, validity, sellType])
            .then(({data}) => processData(data))
            .then(() => changeLoadedState(true))
            .catch(console.error);
    }, [months, person, validity, sellType]);

    const pieChart = (
        <div className="recharts-pie-graph">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
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
        </div>
    );

    return (
        <SpinnerComponent children={pieChart} isDataLoaded={isLoaded}/>
    );
};

export default connect(accessAll)(PieChartYearly);
