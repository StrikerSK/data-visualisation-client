import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";

class StackedGraphComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {

        this.getData();

    }

    getData(){
        fetch("http://localhost:5000/", {
            method: "GET"
        }).then(response => response.json())
            .then((result) => this.setState({data: result}))
    }

    render() {
        const myData = this.state.data;

        return (
            <div className="App">
                <AreaChart width={500} height={400} data={myData} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Juniori" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="Studenti" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="Seniori" stackId="1" stroke="#d42121" fill="#d42121" />
                    <Area type="monotone" dataKey="Dospeli" stackId="1" stroke="#e88c6d" fill="#e88c6d" />
                </AreaChart>
            </div>
        );
    }
}export default StackedGraphComponent;
