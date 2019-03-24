import React, { Component } from 'react';
import '../App.css';
import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";

class LineGraphComponent extends Component {
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
                <AreaChart width={1000} height={600} data={myData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>

                        <linearGradient id="colorSenior" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#d42121" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#d42121" stopOpacity={0}/>
                        </linearGradient>

                        <linearGradient id="colorJuniori" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>

                        <linearGradient id="colorStudenti" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>

                        <linearGradient id="colorDospeli" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#e88c6d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#e88c6d" stopOpacity={0}/>
                        </linearGradient>

                    </defs>

                    <XAxis dataKey="mesiac" />
                    <YAxis />

                    <CartesianGrid strokeDasharray="3 3" />

                    <Tooltip />

                    <Area type="monotone" dataKey="Juniori" stroke="#8884d8" fillOpacity={0} fill="url(#colorJuniori)" />
                    <Area type="monotone" dataKey="Studenti" stroke="#82ca9d" fillOpacity={0} fill="url(#colorStudenti)" />
                    <Area type="monotone" dataKey="Seniori" stroke="#d42121" fillOpacity={0} fill="url(#colorSenior)" />
                    <Area type="monotone" dataKey="Dospeli" stroke="#e88c6d" fillOpacity={0} fill="url(#colorDospeli)" />
                </AreaChart>
            </div>
        );
    }
}export default LineGraphComponent;
