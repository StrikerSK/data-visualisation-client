import React, {useEffect, useState} from "react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {connect} from "react-redux";

import {barDataGetter} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {generateColor, getLabels} from "../../lib/Functions";
import {accessAll} from "../../lib/ReduceAccessor";

const LineGraphComponent = ({months, person, validity, sellType}) => {
    const [data, setData] = useState([]);
    const [line, setLine] = useState([]);
    const [area, setArea] = useState([]);
    const [isLoaded, changeLoadedState] = useState(false);

    const processData = (result) => {
        setData(result);
        createGraphElements();
        changeLoadedState(true);

        function createGraphElements() {
            if (area.length !== 0 && line.length !== 0) {
                setArea([]);
                setLine([]);
            }

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
                    <Line type="monotone" dataKey={label} stroke={generatedColor} fillOpacity={1}
                          fill={"url(#" + identification + ")"}/>
                ]);
            });
        }
    };

    useEffect(() => {
        barDataGetter([months, person, validity, sellType], processData);
    }, [months, person, validity, sellType]);

    const lineGraph = (
        <ResponsiveContainer>
            <LineChart data={data} margin={{top: 0, right: 5, left: 10, bottom: 0}}>
                <defs>
                    {area}
                </defs>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                {line}
            </LineChart>
        </ResponsiveContainer>
    );

    return (
        <SpinnerComponent children={lineGraph} isDataLoaded={isLoaded}/>
    );
};

export default connect(accessAll)(LineGraphComponent);
